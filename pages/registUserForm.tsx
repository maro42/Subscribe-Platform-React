import { Radio, TextField } from '@material-ui/core';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Button from '../components/common/Button';
import Layout from '../components/layout/Layout';
import { checkEmailDupl, signUp } from '../src/lib/api/user';
import { corporationNumberCheck, emailCheck, emptyCheck, passwordCheck } from '../src/lib/validationCheck';

const registUserForm = () => {

    // 회원유형
    const [registType, setRegistType] = useState("member");

    // 회원유형 변경 함수
    const changeType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        // 회원정보 초기화
        setUserInfo({
            ...userInfo,
            email: "",
            password: "",
            name: "",
            // ownerName : "",
            storeName: "",
            businessNum1: "",
            businessNum2: "",
            businessNum3: "",
        });

        // 판매자 여부
        e.target.value === 'member' ? setUserInfo({ ...userInfo, store: false }) : setUserInfo({ ...userInfo, store: true });

        setRegistType(e.target.value);
    }, [registType]);

    // 회원정보
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name: "",
        // ownerName:"",
        storeName: "",
        businessNum1: "",
        businessNum2: "",
        businessNum3: "",
        store: false,   // 판매자여부
        businessNum: ""
    });
    // 회원정보 변경 함수
    const changeInfo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

        // 사업자번호는 숫자만 가능
        if (e.target.name === "businessNum1" || e.target.name === "businessNum2" || e.target.name === "businessNum3") {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        };

        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value.trim()
        });
    }, [userInfo]);

    // 서버에 보낼 사업자번호 생성
    useEffect(() => {
        setUserInfo({ ...userInfo, businessNum: userInfo.businessNum1 + "" + userInfo.businessNum2 + "" + userInfo.businessNum3 });
    }, [userInfo.businessNum1, userInfo.businessNum2, userInfo.businessNum3]);

    // 이메일 중복체크 변수
    const [duplEmail, setDuplEmail] = useState(false);

    // 이메일 중복체크 함수
    const checkDuplEmail = (e: Event) => {
        e.preventDefault();

        if(!emailCheck(userInfo.email)){
            alert("올바른 이메일을 입력해주세요.");
            return false;
        }

        // 이메일 중복체크
        checkEmailDupl(userInfo.email)
            .then(response => {
                if (response.data.result === null) {
                    setDuplEmail(true);
                    alert("사용가능한 이메일입니다.");
                } else {
                    alert("이미 등록된 이메일입니다.");
                }
            })
            .catch(e => {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
                console.log(e);
            })
    }

    // 이메일 변경될 때마다 중복체크 다시하기
    useEffect(() => {
        setDuplEmail(false);
    }, [userInfo.email])

    // 회원가입 함수
    const registUser = () => {

        if(!validation()){
            return false;
        }

        if (window.confirm("가입하시겠습니까?")) {
            // 회원가입
            signUp(userInfo)
                .then(res => {
                    alert("가입되었습니다.");
                    Router.push({
                        pathname: "/",
                    });
                })
                .catch(e => {
                    alert("오류가 발생했습니다. 다시 시도해주세요.");
                    console.log(e);
                })
        }

    }

    // 유효성 체크
    const validation = () => {
        // 이메일 유효성
        if(!emailCheck(userInfo.email)){
            alert("올바른 이메일을 입력해주세요.");
            return false;
        }
        if (!duplEmail) {
            alert("이메일 중복체크를 해주세요.");
            return false;
        }
        

        // 비밀번호 유효성
        if(!passwordCheck(userInfo.password)){
            return false;
        }


        if (!emptyCheck(userInfo.name)) {
            alert("이름을 입력해주세요.");
            return false;
        }

        // 사업자일 때 체크할 부분
        if (userInfo.store) {
            if (!emptyCheck(userInfo.storeName)) {
                alert("상호명을 입력해주세요.");
                return false;
            }

            // 사업자번호 유효성 체크
            if (!corporationNumberCheck(userInfo.businessNum)) {
                alert("올바른 사업자번호를 입력해주세요.");
                return false;
            }
        }

        return true;
    }

    return (
        <Layout>
            <div>
                <label>일반회원</label>
                <Radio
                    checked={registType === 'member'}
                    onChange={changeType}
                    value="member"
                    color="default"
                    name="registType"
                    inputProps={{ 'aria-label': 'member' }}
                />
                <label>판매자</label>
                <Radio
                    checked={registType === 'store'}
                    onChange={changeType}
                    value="store"
                    color="default"
                    name="registType"
                    inputProps={{ 'aria-label': 'store' }}
                />
            </div>
            {/* 일반회원 판매자 공통 */}
            <TextField label="이메일" name="email" onChange={changeInfo} value={userInfo.email} /><Button onClick={checkDuplEmail}>중복확인</Button><br />
            <TextField type="password" label="비밀번호" name="password" onChange={changeInfo} value={userInfo.password} /><br />
            <div><TextField label="이름" name="name" onChange={changeInfo} value={userInfo.name} /></div>
            {registType === "store" ? (    // 판매자 추가정보
                <div>
                    {/* <TextField label="사업자명" name="ownerName" onChange={changeInfo} value={userInfo.ownerName}/><br/> */}
                    <TextField label="상호명" name="storeName" onChange={changeInfo} value={userInfo.storeName} />
                    <div>
                        <TextField label="사업자번호" name="businessNum1" onChange={changeInfo} value={userInfo.businessNum1} /> - <TextField label="사업자번호" name="businessNum2" onChange={changeInfo} value={userInfo.businessNum2} /> - <TextField label="사업자번호" name="businessNum3" onChange={changeInfo} value={userInfo.businessNum3} />
                    </div>
                </div>
            ) : null}
            <br />
            <Button onClick={registUser}>가입하기</Button>
            <Button onClick={() => Router.back()}>취소</Button>
        </Layout>
    );
};

export default registUserForm;