import React, { useState } from 'react';
import { HeaderBlock, GnbBlock, HeaderLogoBlock, MenuBlock } from '../../componentStyle/layout';
import Link from 'next/link';

import LoginDialog from '../login/LoginDialog'
import { Button } from '@material-ui/core';
import Router from "next/router";


export default function Header() {

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");

    const [open, setOpen] = useState(false);

    const handleClickDialogOpen = () => {
        setOpen(true);
    }


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

    return (
        <HeaderBlock>
            <GnbBlock>
                <HeaderLogoBlock><Link href="/"><img src="/images/logo.png" alt="로고" /></Link></HeaderLogoBlock>
                <MenuBlock>
                    <Button variant="outlined" style={{ color: "white", borderColor: "white", marginRight:"5px", marginTop:"2%"}} onClick={handleClickDialogOpen}>로그인</Button>
                    <Button variant="outlined" style={{ color: "white", borderColor: "white", marginRight:"5px", marginTop:"2%" }} onClick={goSignUp}>회원가입</Button>
                    <Button variant="outlined" style={{ color: "white", borderColor: "white", marginTop:"2%" }} onClick={goStore}>판매자페이지</Button>
                    <LoginDialog open={open} setOpen={setOpen} />
                </MenuBlock>
            </GnbBlock>
        </HeaderBlock>
    );
};