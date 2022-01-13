import React, { useState } from 'react';
import { ProductMainContainer } from './Title';
import dynamic from 'next/dynamic';
import CustomEditor from '../../common/CustomEditor';
import { Button } from '@material-ui/core';

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
      <CustomEditor etc={etc} setEtc={setEtc}/>
    </ProductMainContainer>
  );
}

export default Detail;
