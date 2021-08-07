import React, { useCallback, useMemo, useState } from 'react';
import {
  Button,
  CustomTable,
  CustomToggleButton,
  SelectBox,
} from '../../common';
import { ProductMainContainer } from './Title';
import useInputState from '../../customHook/useInputState';
import OptaionTable from './OptaionTable';
import { TableHeader } from '../../../src/lib/props';

const ButtonGroups = [
  {
    children: <p>주단위</p>,
    value: 'week',
  },
  {
    children: <p>월단위</p>,
    value: 'month',
  },
];

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

type OptionsProps = {
  cycle?: string;
  setCycle?: any;
  deliveryDate?: string;
  setDeliveryDate?: any;
  options?: any;
  setOptions?: any;
  maxCount?: number;
  maxConut?: any;
  monthValue?: any;
  weekValue?: any;
};

function Options({
  cycle,
  setCycle,
  deliveryDate,
  setDeliveryDate,
  options,
  setOptions,
  maxConut,
  monthValue,
  weekValue,
}: OptionsProps) {
  const [open, setOpen] = useState(false);

  // const [options, setOptions] = useState<{[key:string] : string}[]>([]);

  const [optionTitle, handleOptionTitle, setOptionTitle] = useInputState('');
  const [price, handlePrice, setPrice] = useInputState('');
  const [stock, handleStock, setStock] = useInputState('');
  const [maxCount, handleMaxCount, setMaxCount] = useInputState('');

  const heendleAddOptions = useCallback(() => {
    //    options.push({
    //     optionTitle : optionTitle,
    //     price : price,
    //     stock : stock,
    //     maxCount : maxCount
    //    })

    setOptions([
      ...options,
      {
        optionTitle: optionTitle,
        price: price,
        stock: stock,
        maxCount: maxCount,
      },
    ]);
  }, [options, setOptions, optionTitle, price, stock, maxCount]);

  const handleAlignment = useCallback(
    (event: React.MouseEvent<HTMLElement>, value: string) => {
      setCycle(value);
    },
    [setCycle],
  );

  const handleSubCategorySelect = useCallback(
    (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      setDeliveryDate(event.target.value);
    },
    [setDeliveryDate],
  );

  return (
    <ProductMainContainer>
      <h1>상품 배송 주기를 선택해 주세요</h1>
      <div>
        <CustomToggleButton
          value={cycle}
          values={ButtonGroups}
          onChange={handleAlignment}
        />
      </div>

      <h1>배송 가능 날짜를 선택해 주세요</h1>

      {cycle === 'week' ? (
        <SelectBox
          values={weekValue!.content}
          value={deliveryDate}
          onChange={handleSubCategorySelect}
          placeHolder={'주 선택'}
          displayEmpty
        />
      ) : cycle === 'month' ? (
        <SelectBox
          values={monthValue!.content}
          value={deliveryDate}
          onChange={handleSubCategorySelect}
          placeHolder={'월 선택'}
          displayEmpty
        />
      ) : null}
      <h1>상품 옵션을 등록해 주세요</h1>

      <div style={{ display: 'flex' }}>
        상품명{' '}
        <input
          title="상품명"
          onChange={handleOptionTitle}
          value={optionTitle}
        />
        가격 <input title="가격" onChange={handlePrice} value={price} />
        재고 <input title="재고" onChange={handleStock} value={stock} />
        최대 주문가능 수량{' '}
        <input
          title="최대주문가능수량"
          onChange={handleMaxCount}
          value={maxCount}
        />
        <Button onClick={heendleAddOptions}>추가</Button>
      </div>

      {<CustomTable headers={OptaionTableHeader} content={options} />}
    </ProductMainContainer>
  );
}

export default Options;
