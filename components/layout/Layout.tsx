import React from 'react';
import { ContainerBlock, Wrap } from '../../componentStyle/layout';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
    children : React.ReactNode;
};

const Layout = ({children}:LayoutProps) => {
    return (
        <Wrap>
            <Header/>
            <ContainerBlock>{children}</ContainerBlock>
            <Footer/>
        </Wrap>
    );
};

export default Layout;