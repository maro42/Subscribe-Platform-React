import React from 'react';

import Products from '../../components/store/products';
import Router from 'next/router';
import Button from '../../components/common/Button';

const products = () => {
  const goUpdateProduct = () => {
    Router.push({
      pathname: '/store/product',
      query: {
        email: encodeURIComponent('이메일'),
      },
    });
  };

  return (
    <div>
      <Button onClick={goUpdateProduct}>상품 등록</Button>
      <Products />
    </div>
  );
};

export default products;
