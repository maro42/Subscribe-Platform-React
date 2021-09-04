import { AxiosResponse } from 'axios';
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Loading } from '../../components/common';
import Layout from '../../components/layout/Layout';
import ServiceList from '../../components/search/ServiceList';
import { getServicesByCategoryId, getServicesByServiceName } from '../../src/lib/api/service';
import { SearchByCategoryId, SearchByServiceName } from '../../src/lib/props/service';

type param = {
    serviceName: String
}

function servicelist({ params }: any) {

    const searchByServiceName = ({ serviceName, pageNum, size }: SearchByServiceName) => {
        return getServicesByServiceName({
            'serviceName': serviceName,
            'pageNum': pageNum,
            'size': size
        })
    }

    const searchByCategoryId = ({ categoryId, pageNum, size }: SearchByCategoryId) => {
        return getServicesByCategoryId({
            'categoryId': categoryId,
            'pageNum': pageNum,
            'size': size
        })
    }

    // useQuery(queryKey, queryFunction, options)
    const { data, isError, isLoading } = useQuery(['getServicesByServiceName', { 'serviceName': params.serviceName }],
        () => params.serchType === 'category' ?
            searchByCategoryId({ 'categoryId': params.categoryId, 'pageNum': 0, 'size': 10 })
            : searchByServiceName({ 'serviceName': params.serviceName, 'pageNum': 0, 'size': 10 }),
        {
            refetchOnWindowFocus: false,
            retry: 4,  // 디폴트 : 3번
            // keepPreviousData:true,
        }
    )




    return (
        <Layout>
            {isLoading ? (<Loading />) : 
            (isError ? <div>오류가 발생했습니다.</div> :  (<ServiceList resultData={data} />))
            }
        </Layout>
    );
}

export async function getServerSideProps(ctx: any) {

    // url 쿼리스트링 정보
    const params = {
        serviceName: decodeURIComponent(ctx.query.serviceName),
        categoryId: decodeURIComponent(ctx.query.categoryId),
        serchType: decodeURIComponent(ctx.query.searchType)
    }

    return {
        props: {
            params: params
        }
    }
}

export default servicelist;