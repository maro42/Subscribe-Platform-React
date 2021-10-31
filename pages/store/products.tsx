import React from 'react';
import styled from 'styled-components';
import Products from '../../components/store/products';
import Router from 'next/router';
import Button from '../../components/common/Button';
import Layout from '../../components/layout/Layout';

const products = () => {
  const goUpdateProduct = () => {
    Router.push({
      pathname: '/store/product',
    });
  };

  return (
    <Layout>
      <Button onClick={goUpdateProduct}>상품 등록</Button>
      <MainContainer>
        <Products />
      </MainContainer>
    </Layout>
  );
};

export default products;

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 1024px;
`;
