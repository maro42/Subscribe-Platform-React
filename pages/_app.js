import '../styles/globals.css';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import wrapper from '../store/configureStore';
import Layout from '../components/layout/Layout';

const SubscribePlatform = ({ Component, pageProps }) => {
  return (
<<<<<<< HEAD
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
=======
    <HelmetProvider>
      <Helmet>
        <title>구독서비스플랫폼</title>
        {/* 파비콘은 나중에 넣자 */}
        {/* <link rel="icon" type="image/png" href="/images/favicon.ico"/> */}
      </Helmet>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HelmetProvider>
  );
};
>>>>>>> 01d52dd344e82efe9356aab1d5ce4db6997cb0d8

export default wrapper.withRedux(SubscribePlatform);
