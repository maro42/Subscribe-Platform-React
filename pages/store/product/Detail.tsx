import React, { useState } from 'react';
import { ProductMainContainer } from './Title';
import dynamic from 'next/dynamic';
import CustomEditor from '../../../components/common/CustomEditor';

type DetailProps = {
  deliveryOption?: string;
  setDeliveryOption?: any;

  etc?: string;
  setEtc?: any;
};

function Detail({
  deliveryOption,
  setDeliveryOption,

  etc,
  setEtc,
}: DetailProps) {
  return (
    <ProductMainContainer>
      <CustomEditor />
    </ProductMainContainer>
  );
}

export default Detail;
