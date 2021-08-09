import '../styles/globals.css';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import wrapper from '../store/configureStore';
import Layout from '../components/layout/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const SubscribePlatform = ({ Component, pageProps }) => {
  return (
  <HelmetProvider>
    <Helmet>
      <title>구독서비스플랫폼</title>
      {/* 파비콘은 나중에 넣자 */}
      {/* <link rel="icon" type="image/png" href="/images/favicon.ico"/> */}
    </Helmet>
    <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    </QueryClientProvider>
  </HelmetProvider>
  )
}

export default wrapper.withRedux(SubscribePlatform);
