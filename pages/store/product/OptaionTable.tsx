import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Dialog, CustomTable } from '../../../components/common';
import useInputState from '../../../components/customHook/useInputState';
import { TableHeader } from '../../../src/lib/props';
import { ProductMainContainer } from './Title';

const OptaionTableHeader: TableHeader[] = [
  {
    label: '옵션 이름',
    property: 'optionTitle',
  },
  {
    label: '가격',
    property: 'price',
  },
  {
    label: '재고',
    property: 'stock',
  },
  {
    label: '최대 주문 가능 수량',
    property: 'maxCount',
  },
];

type OptionTableProps = {
  options: { [key: string]: string }[];
};

export default function OptaionTable({ options }: OptionTableProps) {
  console.log(options);

  return <CustomTable headers={OptaionTableHeader} content={options} />;
}
