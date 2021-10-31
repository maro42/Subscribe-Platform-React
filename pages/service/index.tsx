import React from 'react';
import { useQuery } from 'react-query';
import { Loading } from '../../components/common';
import Layout from '../../components/layout/Layout';
import DetailService from '../../components/store/products/DetailService';
import { getServiceById } from '../../src/lib/api/service';
import { ServiceDto } from '../../src/lib/props/service';

const serviceSample: ServiceDto = {
  serviceId: 1,
  serviceName: '견과류 1',
  serviceCycle: [{ label: 'WEEK', value: 'WEEK' }],
  availableDay: [
    { label: '월', value: '월' },
    { label: '화', value: '화' },
  ],
  detailContents: '안녕하세요',
  serviceOptions: [
    {
      maxCount: 10,
      optionName: 'Option1',
      price: 10000,
      stock: 500,
    },
    {
      maxCount: 10,
      optionName: 'Option2',
      price: 20000,
      stock: 500,
    },
    {
      maxCount: 10,
      optionName: 'Option3',
      price: 30000,
      stock: 500,
    },
  ],
  serviceImages: [],
  categories: [
    {
      value: 1,
      label: '식품',
    },
  ],
};

function Service() {
  const detailServiceById = (serviceId: number) => {
    return getServiceById(serviceId);
  };

  // const { data, isError, isLoading } = useQuery<ServiceDto>([
  //   'getServiceById',
  //   { serviceId: 1 },
  //   detailServiceById(1),
  //   {
  //     refetchOnWindowFocus: false,
  //     retry: 4, // 디폴트 : 3번
  //     // keepPreviousData:true,
  //   },
  // ]);

  // console.log('>>>', data!);
  // return (
  //   <Layout>
  //     {isLoading ? (
  //       <Loading />
  //     ) : isError ? (
  //       <div> 오류가 발생했습니다.</div>
  //     ) : (
  //       <DetailService service={serviceSample!} />
  //     )}
  //   </Layout>
  // );

  return (
    <Layout>
      <DetailService service={serviceSample!} />
    </Layout>
  );
}

export default Service;
