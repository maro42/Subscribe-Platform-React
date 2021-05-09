import '../styles/globals.css';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import wrapper from '../store/configureStore';
import Layout from '../components/layout/Layout';

const SubscribePlatform = ({ Component, pageProps }) => {
  return (
  <HelmetProvider>
    <Helmet>
      <title>구독서비스플랫폼</title>
      {/* 파비콘은 나중에 넣자 */}
      {/* <link rel="icon" type="image/png" href="/images/favicon.ico"/> */}
    </Helmet>
    <Component {...pageProps} />
  </HelmetProvider>
  )
}

export default wrapper.withRedux(SubscribePlatform);
