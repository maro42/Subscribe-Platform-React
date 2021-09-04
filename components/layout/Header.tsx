import React, { useState } from 'react';
import { HeaderBlock, GnbBlock, HeaderLogoBlock, MenuBlock } from '../../componentStyle/layout';
import Link from 'next/link';

import LoginDialog from '../login/LoginDialog'
import { Button } from '@material-ui/core';
import Router from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { confirmLogin } from '../../src/reducers/auth';


export default function Header() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(confirmLogin());
    }, [])

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");

    const [open, setOpen] = useState(false);

    const handleClickDialogOpen = () => {
        setOpen(true);
    }

    const { loginYn, auth } = useSelector(({ loginReducer }: any) => ({
        loginYn: loginReducer.loginYn,
        auth: loginReducer.auth
    }))


    const openLoginForm = (e: Event) => {
        e && e.preventDefault();
        setPopupTitle("login");
        setPopupOpen(true);
    }

    const goSignUp = () => {
        Router.push({
            pathname: "/registUserForm",
        });
    }

    const goStore = () => {
        Router.push({
            pathname: "/store",
        });
    }

    const goMypage = () => {
        Router.push({
            pathname: "/mypage"
        })
    }

    // 로그아웃 처리 함수
    const logout = () => {
        localStorage.removeItem('Authorization');
        const currPath = window.location.pathname + window.location.search;
        alert("로그아웃되었습니다.");
        window.location.replace(currPath);
    }

    return (
        <HeaderBlock>
            <GnbBlock>
                <HeaderLogoBlock><Link href="/"><img src="/images/logo.png" alt="로고" /></Link></HeaderLogoBlock>
                <MenuBlock>
                    {loginYn === 'Y' ? (
                        <>
                            <Button variant="outlined" style={{ color: "white", borderColor: "white", marginRight: "5px", marginTop: "2%" }} onClick={logout}>로그아웃</Button>
                            {auth.includes('STORE') && (<Button variant="outlined" style={{ color: "white", borderColor: "white", marginTop: "2%" }} onClick={goStore}>판매자페이지</Button>)}
                            {auth.includes('USER') && (<Button variant="outlined" style={{ color: "white", borderColor: "white", marginTop: "2%" }} onClick={goMypage}>마이페이지</Button>)}
                        </>
                    ) : (
                        <>
                            <Button variant="outlined" style={{ color: "white", borderColor: "white", marginRight: "5px", marginTop: "2%" }} onClick={handleClickDialogOpen}>로그인</Button>
                            <Button variant="outlined" style={{ color: "white", borderColor: "white", marginRight: "5px", marginTop: "2%" }} onClick={goSignUp}>회원가입</Button>
                        </>
                    )}
                    <LoginDialog open={open} setOpen={setOpen} />
                </MenuBlock>
            </GnbBlock>
        </HeaderBlock>
    );
};