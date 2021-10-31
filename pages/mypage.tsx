import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import TabBar from "../components/mypage/TabBar";


function mypage(props:any) {

    const { loginYn } = useSelector(({ loginReducer }: any) => ({
        loginYn: loginReducer.loginYn,
    }));

    // useEffect(() => {
    //     if (loginYn === 'N') {
    //         alert('로그인이 필요합니다.');
    //         window.location.replace('/');
    //     }
    // }, [])
    return (
        <Layout>
        <h2>마이페이지</h2>
        {loginYn === 'Y' && <TabBar currtab={props.currtab}/>}
        </Layout>
    );
}

export async function getServerSideProps(ctx: any) {
  return { props: { currtab: decodeURIComponent(ctx.query.currtab) } };
}

export default mypage;