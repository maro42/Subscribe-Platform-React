import React, { useEffect } from 'react';

import Products from '../../components/store/products';
import Router from 'next/router';
import Button from '../../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../src/reducers/store/mypage';

const products = () => {
  const { serviceList } = useSelector(({ storeMypageReducer }) => ({
    serviceList: storeMypageReducer.service,
  }));

  console.log(serviceList);

  const goUpdateProduct = () => {
    Router.push({
      pathname: '/store/product',
      query: {
        email: encodeURIComponent('이메일'),
      },
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getServices({
        pageNum: 0,
        size: 10,
      }),
    );
  });

  return (
    <div>
      <Button onClick={goUpdateProduct}>상품 등록</Button>
      <Products />
    </div>
  );
};

export default products;
