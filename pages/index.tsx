import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Link from "next/link";
import Button from '../components/common/Button';
import Router from "next/router";

const client = new QueryClient();

export default function Home() {

  const goTest = () => {
    Router.push({
      pathname: "/test",
      query : {
        name : encodeURIComponent("방민주"),
      }
    });
  }

  return (
      <div>
        <Link href="/test">테스트페이지 이동하기</Link>
        <Button onClick={goTest}>테스트페이지 이동하기222</Button>
      </div>
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