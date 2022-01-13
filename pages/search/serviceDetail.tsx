import React, { useState } from "react";
import { useQuery } from "react-query";
import { Loading } from "../../components/common";
import Layout from "../../components/layout/Layout";
import DetailService from "../../components/store/products/DetailService";
import { getServiceById } from "../../src/lib/api/service";

function serviceDetail(props:any){

    const service = useQuery("getNewServices", () => getServiceById(props.serviceId),
        {
            refetchOnWindowFocus: false,
        });

    return(
        <Layout>
        {service.isLoading ? <Loading/> : <DetailService service={service.data}/>}
        </Layout>
    );
}

export async function getServerSideProps(ctx: any) {
    return { props: { serviceId: decodeURIComponent(ctx.query.id) } };
  }

export default serviceDetail;