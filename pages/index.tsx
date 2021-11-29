import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Router from "next/router";
import Layout from '../components/layout/Layout';
import SearchByTitleForm from '../components/search/SearchByTitleForm';
import CategorySelect from '../components/search/CategorySelect';
import { Button } from '@material-ui/core';
import router from 'next/router';
import RecentService from '../components/main/RecentService';
import WeeklyPopularity from '../components/main/WeeklyPopularity';
import { RECENT_SERVICE } from '../src/globalProperties';

export default function Home() {

  // const goTest = () => {
  //   Router.push({
  //     pathname: "/test",
  //     query : {
  //       name : encodeURIComponent("방민주"),
  //     }
  //   });
  // }

  const searchNewServices = () => {
    router.push({
      pathname : "/newServices",
    })
  }

  return (
    <Layout>
      {/* <Link href="/test">테스트페이지 이동하기</Link>
        <Button onClick={goTest}>테스트페이지 이동하기222</Button> */}
        <CategorySelect/>
        <Button style={{marginTop:"5px"}} onClick={searchNewServices}>새로들어온 서비스</Button>
        <Button style={{marginTop:"5px"}} >베스트</Button>
        <Button style={{marginTop:"5px"}} >이벤트</Button>
        <SearchByTitleForm/>
        <WeeklyPopularity/>
        <RecentService/>
    </Layout>
  );
}

/**
 * getStaticProps : static data를 위한 data fetching
 * getServerSideProps : SSR을 위한 data fetching
 *
 * ※ 일반적인 pages/index.tsx에서는 getStaticProps를 사용하고,
 *    동적인 pages/test/[name].tsx 이런 곳에서는 getStaticProps, getStaticPaths를 같이 사용.
 */

// export const getStaticProps : GetStaticProps = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery('apiTest',apiTest,{
//     staleTime: 10000,
//   });
//   return{
//     props:{
//       dehydrateState: dehydrate(queryClient),
//     },
//   };
// };