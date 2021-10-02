import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Loading } from "../components/common";
import Error from "../components/common/Error";
import Layout from "../components/layout/Layout";
import TabBar from "../components/mypage/TabBar";
import { getMyInfo } from "../src/lib/api/mypage";

// todo : 로그인 만료 처리
function mypage() {

    const { loginYn } = useSelector(({ loginReducer }: any) => ({
        loginYn: loginReducer.loginYn,
    }));

    const {data, isError, isLoading} = useQuery('getMyInfo', getMyInfo,{
        refetchOnWindowFocus: false,
    });

    // useEffect(() => {
    //     if (loginYn === 'N') {
    //         alert('로그인이 필요합니다.');
    //         window.location.replace('/');
    //     }
    // }, [])
    return (
        <Layout>{isLoading && <Loading/>}
        <h2>마이페이지</h2>
        {isError || data === null || data === undefined ? <Error/> : <TabBar data={data}/>}
        </Layout>
    );
}

export default mypage;