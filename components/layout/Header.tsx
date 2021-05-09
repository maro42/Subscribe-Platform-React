import React, { useState } from 'react';
import { HeaderBlock, GnbBlock, HeaderLogoBlock, MenuBlock } from '../../componentStyle/layout';
import Button from '../common/Button';
import Link from "next/link";

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
                <HeaderLogoBlock><Link href="/"><img src="/images/logo.png" alt="로고" /></Link></HeaderLogoBlock>
                <MenuBlock>
                    <Button onClick={openLoginForm}>로그인</Button>
                    <Link href="/registUserForm">회원가입</Link>
                    <Link href="/store">판매자페이지</Link>
                </MenuBlock>
            </GnbBlock>
        </HeaderBlock>
    );
};