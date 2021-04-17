import React from 'react';
import {FooterBlock, FooterBox} from "../../componentStyle/layout";

const Footer = () => {
    return (
        <FooterBlock>
            <FooterBox>
                <div className="menu">
                    <div>소개</div>
                    <div>공지사항</div>
                    <div>고객지원</div>
                </div>
            </FooterBox>
        </FooterBlock>
    );
};

export default Footer;