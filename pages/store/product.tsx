import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoForm from '../../components/store/mypage/InfoForm';
import ModifyForm from '../../components/store/mypage/ModifyForm';
import Product from '../../components/store/product';
import { getStoreinfo, setModifyYn } from '../../src/reducers/store/mypage';

const mypage = () => {
  return <Product />;
};

export default mypage;
