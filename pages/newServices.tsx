import React from "react";
import { useQuery } from "react-query";
import { Loading } from "../components/common";
import Layout from "../components/layout/Layout";
import ServiceList from "../components/search/ServiceList";
import { getNewServices } from "../src/lib/api/service";
import { BasicParam } from "../src/lib/props/service";

function newServices() {

    const searchFunc = ({ pageNum, size }: BasicParam) => {
        return getNewServices({
            'pageNum': pageNum,
            'size': size
        })
    }

    const { data, isError, isLoading } = useQuery('getNewServices', () => searchFunc({ 'pageNum': 0, 'size': 10 }),
        {
            refetchOnWindowFocus: false,
            retry: 4,  // 디폴트 : 3번
            // keepPreviousData:true,
        }
    )
    return (
        <Layout>
            {isLoading ? (<Loading />) : (<ServiceList resultData={data} />)}
            {isError && <div>오류가 발생했습니다.</div>}
        </Layout>
    );
}

export default newServices;