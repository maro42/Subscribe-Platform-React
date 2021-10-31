import React, { useState } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, TextField } from "@material-ui/core";
import { cancelSubscribe } from "../../src/lib/api/mypage";

type paramType = {
    closeFunc: any,
    subscribeId: number,
    changeTab: any
}

function CancelSubscribePopup({ closeFunc, subscribeId }: paramType) {

    const [value, setValue] = useState(1);    // 라디오버튼 값
    const [reasonEtc, setReasonEtc] = useState(''); // 기타 사유

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number((event.target as HTMLInputElement).value));
        setReasonEtc('');
    };

    const handleReasonEtc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReasonEtc(e.target.value);
    }

    // 구독취소 함수
    const cancelSubscribeFunc = () => {
        if (window.confirm("취소하시겠습니까?")) {
            cancelSubscribe({ subscribeId, value, reasonEtc })
                .then(res => {
                    alert("취소되었습니다.");
                })
                .catch(err => { alert("오류가 발생했습니다."); console.log(err) });
            closeFunc();
            window.location.replace('/mypage?currtab=subscribe');
        }
    }

    return (
        <>
            <h3>구독취소</h3>
            <p>취소사유를 알려주세요.</p>
            <FormControl component="fieldset">
                <RadioGroup name="cancelReason" value={value} onChange={handleChange}>
                    <FormControlLabel value={1} control={<Radio />} label="단순변심" />
                    <FormControlLabel value={2} control={<Radio />} label="가격상승" />
                    <FormControlLabel value={3} control={<Radio />} label="제품불만족" />
                    <FormControlLabel value={4} control={<Radio />} label="기타" /> {value === 4 && (<TextField name='reasonEtc' placeholder='사유를 입력해주세요.' value={reasonEtc} onChange={handleReasonEtc} />)}
                </RadioGroup>
            </FormControl>
            <br />
            <div style={{ float: 'right' }}>
                <Button variant='outlined' onClick={closeFunc}>취소</Button> &nbsp;
                <Button variant='outlined' onClick={cancelSubscribeFunc}>확인</Button>
            </div>
        </>
    )
}

export default CancelSubscribePopup;