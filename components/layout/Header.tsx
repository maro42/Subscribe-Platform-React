import React, { useState } from 'react';
import { HeaderBlock, GnbBlock, HeaderLogoBlock, MenuBlock } from '../../componentStyle/layout';
import { baseURL } from '../../property';
import Button from '../common/Button';

import LoginDialog from '../login/LoginDialog'


export default function Header(){

const [popupOpen, setPopupOpen] = useState(false);
const [popupTitle, setPopupTitle] = useState("");

const [open, setOpen] = useState(false);

const handleClickDialogOpen = ()=>{
    setOpen(true);
}


const openLoginForm = (e:Event) => {
    e && e.preventDefault();
    setPopupTitle("login");
    setPopupOpen(true);
}

    return (
        <HeaderBlock>
            <GnbBlock>
                <HeaderLogoBlock><img src="/images/logo.png" alt="로고" /></HeaderLogoBlock>
                <MenuBlock>
                    <Button onClick={handleClickDialogOpen}>로그인</Button>
                    <Button>회원가입</Button>
                    <LoginDialog open={open} setOpen={setOpen}/>
                </MenuBlock>
            </GnbBlock>
        </HeaderBlock>
    );
};