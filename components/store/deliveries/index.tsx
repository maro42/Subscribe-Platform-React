import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getDeliveries } from '../../../src/lib/api/store/delivery';
import { ListResponse, TableHeader } from '../../../src/lib/props';
import { DeliveriesReqDto } from '../../../src/lib/props/delivery';
import { Loading, Button } from '../../common';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import DeliveryTable from './deliveryTable';

const DeliveryTableHeader: TableHeader[] = [
  {
    label: '서비스 이름',
    property: 'serviceName',
  },
  {
    label: '배송 여부',
    property: 'complete',
  },
];

type dateType = 'year' | 'month' | 'week' | 'day';

const currentDate = (date: Date) => {
  const year = date.toLocaleDateString('en-US', {
    year: 'numeric',
  });
  const month = date.toLocaleDateString('en-US', {
    month: '2-digit',
  });
  const day = date.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  return `${year}-${month}-${day}`;
};

const calculateDate = (
  currDate: string,
  dateType: dateType,
  isPlus: boolean,
) => {
  switch (dateType) {
    case 'year':
      const temp = isPlus ? Number(currDate) + 1 : Number(currDate) - 1;

      return temp.toString();

    case 'month':
      if (currDate === '1' || currDate === '12') {
        return currDate;
      } else {
        const temp = isPlus ? Number(currDate) + 1 : Number(currDate) - 1;

        return temp.toString();
      }

    case 'week':
      if (currDate === '1' || currDate === '53') {
        return currDate;
      } else {
        const temp = isPlus ? Number(currDate) + 1 : Number(currDate) - 1;

        return temp.toString();
      }
    case 'day':
      let dateSplit = currDate.split('-');
      const tempDate = new Date(
        Number(dateSplit[0]),
        Number(dateSplit[1]) - 1,
        Number(dateSplit[2]),
      );

      isPlus
        ? tempDate.setDate(tempDate.getDate() + 1)
        : tempDate.setDate(tempDate.getDate() - 1);

      return currentDate(tempDate);
  }
};

function Deliveries() {
  const [date, setDate] = useState<string>(currentDate(new Date()));
  const [dateType, setDateType] = useState<dateType>('day');

  const deliveries = (param: DeliveriesReqDto) => {
    return getDeliveries(param);
  };

  const delivary = useQuery(
    'getDeliveries',
    () => deliveries({ storeId: 1, date: date, type: dateType }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const handleDateTypeButton = (type: dateType) => {
    const tempDate = new Date();

    const year = tempDate.toLocaleDateString('en-US', {
      year: 'numeric',
    });
    const month = tempDate.toLocaleDateString('en-US', {
      month: '2-digit',
    });
    const day = tempDate.toLocaleDateString('en-US', {
      day: '2-digit',
    });
    setDateType(type);
    switch (dateType) {
      case 'year':
        setDate(year);
        break;

      case 'month':
        setDate(month);
        break;

      case 'week':
        break;
      case 'day':
        setDate(`${year}-${month}-${day}`);
        break;
    }
  };

  const handleDate = (isPlus: boolean) => {
    const calcDate = calculateDate(date, dateType, isPlus);

    setDate(calcDate);
  };

  useEffect(() => {
    delivary.refetch();
  }, [date, dateType]);

  return (
    <div>
      <Button onClick={() => handleDateTypeButton('year')}>YEAR</Button>
      <Button onClick={() => handleDateTypeButton('month')}>MONTH</Button>
      {/* <Button onClick={() => handleDateTypeButton('week')}>WEEK</Button> */}
      <Button onClick={() => handleDateTypeButton('day')}>DAY</Button>

      <ArrowLeft onClick={() => handleDate(false)} />
      {date}
      <ArrowRight onClick={() => handleDate(true)} />

      {delivary.isLoading ? (
        <Loading />
      ) : delivary.isError ? (
        <div> 오류가 발생했습니다.</div>
      ) : (
        <DeliveryTable
          headers={DeliveryTableHeader}
          content={delivary.data!.content!}
        />
      )}
    </div>
  );
}

export default Deliveries;
