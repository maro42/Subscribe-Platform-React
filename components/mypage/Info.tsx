import { Button } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getMyInfo, udpatePasswordInfo, updateMyInfo } from "../../src/lib/api/mypage";
import { passwordCheck } from "../../src/lib/validationCheck";
import { Loading } from "../common";
import ComModal from "../common/ComModal";
import EmptyResult from "../common/EmptyResult";
import Error from "../common/Error";
import PostCode from "./PostCode";

// todo : 비밀번호 유효성 검사
function Info() {

    const { data, isError, isLoading } = useQuery('getMyInfo', getMyInfo, {
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        setUpdateInfo({
            ...updateInfo,
            zipcode: data == undefined ? '' : data.address.zipCode,
            address1: data == undefined ? '' : data.address.address1,
            address2: data == undefined ? '' : data.address.address2,
            phone1: data != undefined ? data.phone.phoneNumber.substring(0, 3) : null,
            phone2: data != undefined ? data.phone.phoneNumber.substring(3, 7) : null,
            phone3: data != undefined ? data.phone.phoneNumber.substring(7, 11) : null,
        })
    }, [data])

    const [updateInfo, setUpdateInfo] = useState({
        zipcode: '',
        address1: '',
        address2: '',
        phone1: '',
        phone2: '',
        phone3: '',
    });

    const [isAddrPopupOpen, setIsAddrePopupOpen] = useState(false); // 주소팝업 오픈여부
    // 주소팝업 오픈 관리함수
    const handlePopup = () => {
        setIsAddrePopupOpen(!isAddrPopupOpen);
    }

    // 주소팝업 콜백함수
    const setAddress = (zonecode: string, fulladdress: string) => {
        setUpdateInfo({
            ...updateInfo,
            zipcode: zonecode,
            address1: fulladdress,
            address2: "",
        })
    }

    // 상세주소, 연락처 변경 함수
    const changeUpdateInfo = (e: React.ChangeEvent<HTMLInputElement>) => {

        setUpdateInfo({
            ...updateInfo,
            [e.target.name]: e.target.value
        })
    }


    // 정보수정함수
    const modifyMyInfo = () => {

        if (window.confirm("수정하시겠습니까?")) {
            const param = {
                address: {
                    address1: updateInfo.address1,
                    address2: updateInfo.address2,
                    zipCode: updateInfo.zipcode
                },
                phone: {
                    phoneNumber: updateInfo.phone1 + updateInfo.phone2 + updateInfo.phone3
                }
            }

            // 요청
            updateMyInfo(param)
                .then(res => {
                    alert("변경되었습니다.");
                    const currPath = window.location.pathname + window.location.search;
                    window.location.replace(currPath);
                })
                .catch(e => {
                    alert("오류가 발생했습니다.");
                    console.log(e);
                })
        }

    }

    const [passwordInfo, setPasswordInfo] = useState({
        currPassword: "",
        changePassword: "",
        confPassword: ""
    })

    // 비밀번호 변수 관리 함수
    const handlePasswordInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInfo({
            ...passwordInfo,
            [e.target.name]: e.target.value
        })
    }

    // 비밀번호 변경 함수
    const modifyPassword = () => {

        // 유효성 검사
        if(!passwordValidation()){
            return false;
        }

        if (window.confirm("비밀번호를 변경하시겠습니까?")) {
            const param = {
                changePassword: passwordInfo.changePassword,
                currPassword: passwordInfo.currPassword
            }
            udpatePasswordInfo(param)
                .then(res => {
                    if (res.data) {
                        alert("변경되었습니다.");
                        const currPath = window.location.pathname + window.location.search;
                        window.location.replace(currPath);
                    } else {
                        alert("현재 비밀번호가 일치하지 않습니다. 다시 시도해주세요.");
                    }
                })
                .catch(e => {
                    alert("오류가 발생했습니다.");
                    console.log(e);
                })
        }
    }

    const passwordValidation = () => {

        if(!passwordCheck(passwordInfo.changePassword)){
            return false;
        }

        if (!(passwordInfo.changePassword.trim() === passwordInfo.confPassword.trim())) {
            alert("변경 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return false;
        }

        return true;
    }


    return (
        <>
            {isLoading && <Loading />}
            {isError && <Error />}
            {data !== undefined && data ? (
                <div style={{ marginTop: '1%' }}>
                    <table>
                        <colgroup>
                            <col width='30%' />
                            <col width='70%' />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td><TextField disabled name='name' value={data.name} /></td>
                            </tr>
                            <tr>
                                <th>아이디(이메일)</th>
                                <td><TextField disabled name='email' value={data.email} /></td>
                            </tr>
                            <tr>
                                <th>연락처</th>
                                <td>
                                    <TextField name='phone1' value={updateInfo.phone1} onChange={changeUpdateInfo} /> - <TextField name='phone2' value={updateInfo.phone2} onChange={changeUpdateInfo} /> - <TextField name='phone3' value={updateInfo.phone3} onChange={changeUpdateInfo} />
                                </td>
                            </tr>
                            <tr>
                                <th>주소(배송지)</th>
                                <td>
                                    <TextField disabled name='zipCode' value={updateInfo.zipcode} /> <Button variant="outlined" onClick={handlePopup}>주소찾기</Button>
                                    <br />
                                    <TextField style={{ width: '100%' }} disabled name='address1' value={updateInfo.address1} /> <TextField name='address2' value={updateInfo.address2} onChange={changeUpdateInfo} />
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 변경</th>
                                <td>
                                    현재 비밀번호 <TextField type='password' name='currPassword' value={passwordInfo.currPassword} onChange={handlePasswordInfo} /> <Button variant="outlined" onClick={modifyPassword}>변경하기</Button> <br />
                                    변경 비밀번호 <TextField type='password' name='changePassword' value={passwordInfo.changePassword} onChange={handlePasswordInfo} /> <br />
                                    비밀번호 확인 <TextField type='password' name='confPassword' value={passwordInfo.confPassword} onChange={handlePasswordInfo} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button variant="outlined" style={{ float: 'right', marginRight: '10%', marginBottom: '1%' }} onClick={modifyMyInfo}>수정하기</Button>
                    <ComModal open={isAddrPopupOpen} closeFunc={handlePopup} contents={<PostCode callbackFunc={setAddress} closeFunc={handlePopup} />} />
                </div>
            ) : <Error />}
        </>
    );
}

export default Info;