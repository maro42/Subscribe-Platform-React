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
import TextField from '@material-ui/core/TextField';

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
    property: 'optionName',
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

  const [optionName, handleOptionName, setOptionName] = useInputState('');
  const [price, handlePrice, setPrice] = useInputState('');
  const [stock, handleStock, setStock] = useInputState('');
  const [maxCount, handleMaxCount, setMaxCount] = useInputState('');
  const [id, setId] = useState(0);
  const heendleAddOptions = useCallback(() => {
    setOptions([
      ...options,
      {
        id: id,
        optionName: optionName,
        price: price,
        stock: stock,
        maxCount: maxCount,
      },
    ]);

    setId(id + 1);
  }, [options, setOptions, optionName, price, stock, maxCount, id, setId]);

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

  const handleClickRemoveOption = (id: number) => {
    setOptions(options.filter((v: any) => v.id !== id));
  };

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
        <TextField
          id="standard-basic"
          label="상품명"
          style={{ margin: 8, width: '100%' }}
          margin="dense"
          inputProps={{ onChange: handleOptionName }}
        />
        <TextField
          id="standard-basic"
          label="가격"
          style={{ margin: 8, width: '100%' }}
          margin="dense"
          inputProps={{ onChange: handlePrice }}
          type="number"
        />
        <TextField
          id="standard-basic"
          label="재고"
          style={{ margin: 8, width: '100%' }}
          margin="dense"
          inputProps={{ onChange: handleStock }}
          type="number"
        />
        <TextField
          id="standard-basic"
          label="최대 주문 가능 수량"
          style={{ margin: 8, width: '100%' }}
          margin="dense"
          inputProps={{ onChange: handleMaxCount }}
          type="number"
        />
        <Button onClick={heendleAddOptions}>추가</Button>
      </div>

      {
        <CustomTable
          headers={OptaionTableHeader}
          content={options}
          removable
          onClickRemove={handleClickRemoveOption}
        />
      }
    </ProductMainContainer>
  );
}

export default Options;
