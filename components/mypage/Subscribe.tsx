import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import ComModal from "../common/ComModal";
import CancelSubscribePopup from "./CancelSubscribePopup";

function Subscribe() {

    const [cancelPopup, setCancelPopup] = useState(false);

    const cancelPopupFunc = () => {
        setCancelPopup(!cancelPopup);
    }

    return (
        <div>
        <table style={{width:'80%'}}>
            <colgroup>
                <col width='40%' />
                <col width='50%' />
                <col width='10%' />
            </colgroup>
            <tbody>
                <tr>
                    <td><img style={{ width: '300px', height: '180px' }} src='/images/cancel.png' /></td>
                    <td>
                        <div>민주네 견과류</div>
                        <div>
                            <p><span>60</span>일째 구독 중</p>
                            <p>
                                선택옵션 / 가격 : <span>캐슈넛</span> / <span>3000</span>원 <br/>
                                <span>호두</span> / <span>2000</span>원
                            </p>
                            <p>결제 횟수 : <span>3</span>회</p>
                            <p>다음 결제예정일 : <span>2021.01.10</span></p>
                        </div>
                    </td>
                    <td><Button variant="outlined" onClick={cancelPopupFunc}>구독취소</Button></td>
                </tr>
            </tbody>
        </table>
        <ComModal open={cancelPopup} closeFunc={cancelPopupFunc} contents={<CancelSubscribePopup closeFunc={cancelPopupFunc}/>}/>
        </div>
    )
}

export default Subscribe;