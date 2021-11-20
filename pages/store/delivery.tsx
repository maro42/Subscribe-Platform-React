import Router from 'next/router';
import React from 'react';
import Button from '../../components/common/Button';
import Delivery from '../../components/store/delivery';

const index = () => {
  return (
    <div>
      <Delivery />
    </div>
  );
};

export default index;
