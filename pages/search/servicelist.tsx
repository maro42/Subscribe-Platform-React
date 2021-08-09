import { AxiosResponse } from 'axios';
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Loading } from '../../components/common';
import Layout from '../../components/layout/Layout';
import ServiceList from '../../components/search/ServiceList';
import {getServicesByServiceName } from '../../src/lib/api/service';

type param = {
    serviceName: String
}

function servicelist({ params }: any) {

    // useQuery(queryKey, queryFunction, options)
    const { data, isError, isLoading } = useQuery(['getServicesByServiceName', { 'serviceName': params.serviceName }], async () => await getServicesByServiceName({
        'serviceName': params.serviceName,
        'pageNum': 0,
        'size': 5
    }),
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

export async function getServerSideProps(ctx: any) {

    // url 쿼리스트링 정보
    const params = {
        serviceName: decodeURIComponent(ctx.query.serviceName),
        categoryId: decodeURIComponent(ctx.query.category),
        serchType: decodeURIComponent(ctx.query.searchType)
    }

    return {
        props: {
            params: params
        }
    }
}

export default servicelist;