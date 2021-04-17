import React, { useState } from 'react';
import { HeaderBlock, GnbBlock, HeaderLogoBlock, MenuBlock } from '../../componentStyle/layout';
import Button from '../common/Button';

export default function Header(){

const [popupOpen, setPopupOpen] = useState(false);
const [popupTitle, setPopupTitle] = useState("");

const openLoginForm = (e:Event) => {
    e && e.preventDefault();
    setPopupTitle("login");
    setPopupOpen(true);
}

    return (
        <HeaderBlock>
            <GnbBlock>
                <HeaderLogoBlock>로고자리</HeaderLogoBlock>
                <MenuBlock>
                    <Button onClick={openLoginForm}>로그인</Button>
                    <Button>회원가입</Button>
                </MenuBlock>
            </GnbBlock>
        </HeaderBlock>
    );
};