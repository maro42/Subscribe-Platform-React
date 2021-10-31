import React, { useCallback, useState } from 'react';
import { ServiceDto } from '../../../src/lib/props/service';
import styled from 'styled-components';
import { SelectBox } from '../../common';
import CustomTabs from '../../common/CustomTabs';
import ServiceImage from './ServiceImage';
import ServiceTable from './ServiceTable';
import { SelectBoxResponse, TableHeader } from '../../../src/lib/props';
import { Button } from '../../../components/common';
import TextField from '@material-ui/core/TextField';
import MiniImages from './MiniImages';
import * as API from '../../../src/reducers/service';
import {
  CreateServiceDto,
  PickedOption,
} from '../../../src/lib/props/subscribe';
import { useDispatch } from 'react-redux';

const questionSample: {
  headers: TableHeader[];
  content: { [key: string]: string | any }[];
} = {
  headers: [
    {
      label: '제목',
      property: 'title',
    },
    {
      label: '작성자',
      property: 'email',
    },
    {
      label: '작성 날짜',
      property: 'date',
    },
  ],
  content: [
    {
      title: '문의1~~~~',
      email: 'QID_1',
      date: '1111-11-11',
      custom: {
        title: '문의 1 타이틀',
        content: '문의 1 내용내용내용내용',
      },
    },
    {
      title: '문의2~~~~',
      email: 'QID_2',
      date: '2222-22-22',
      custom: {
        title: '문의 2 타이틀',
        content: '문의 2 내용내용내용내용',
      },
    },
    {
      title: '문의3~~~~',
      email: 'QID_3',
      date: '3333-33-33',
    },
  ],
};

const reviewSample: {
  headers: TableHeader[];
  content: { [key: string]: string }[];
} = {
  headers: [
    {
      label: '제목',
      property: 'title',
    },
    {
      label: '작성자',
      property: 'email',
    },
    {
      label: '작성 날짜',
      property: 'date',
    },
  ],
  content: [
    {
      title: '후기1~~~~',
      email: 'RID_1',
      date: '1111-11-11',
    },
    {
      title: '후기2~~~~',
      email: 'RID_2',
      date: '2222-22-22',
    },
    {
      title: '후기3~~~~',
      email: 'RID_3',
      date: '3333-33-33',
    },
  ],
};

type SelectBoxAndTitleProps = {
  values: SelectBoxResponse[];
  title: string;
  value: string | number;
  setValue: any;
  type?: 'selectBox' | 'input';
};

function SelectBoxAndTitle({
  values,
  title,
  value,
  setValue,
  type,
}: SelectBoxAndTitleProps) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      setValue(event.target.value);
    },
    [setValue],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.value) setValue(e.target.value);
    },
    [setValue],
  );

  return (
    <SelectBoxContainer>
      <div>
        <p>{title}</p>
      </div>
      <div>
        {type === 'selectBox' ? (
          <SelectBox values={values} onChange={handleChange} />
        ) : (
          <TextField
            id="standard-basic"
            label="수량 입력"
            style={{ margin: 8, width: '100%' }}
            margin="dense"
            inputProps={{ onChange: handleInputChange }}
            type="number"
          />
        )}
      </div>
    </SelectBoxContainer>
  );
}

type DetailServiceProps = {
  service: ServiceDto;
};

function DetailService({ service }: DetailServiceProps) {
  const dispatch = useDispatch();

  const [tabValue, setTablValue] = useState(0);
  const [cycle, setCycle] = useState('');
  const [day, setDay] = useState('');
  const [count, setCount] = useState('');
  const [option, setOption] = useState('');

  const [resCount, setResCount] = useState<string[]>([]);
  const [resOption, setResOption] = useState<string[]>([]);

  const [optionList, setOptionList] = useState<string[]>([]);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTablValue(newValue);
  };

  const handleClickAddCart = () => {
    const pickOpions: PickedOption[] = resOption.map((v, index) => {
      const options: PickedOption = {
        optionId: Number(v),
        quantity: Number(resCount[index]),
      };
      return options;
    });

    const data: CreateServiceDto = {
      serviceId: 1,
      deliveryCycle: cycle,
      deliveryDay: day,
      options: pickOpions,
    };

    dispatch(API.saveShopping(data));
  };

  const handleClickBuyNow = () => {
    console.log();
  };

  const handleClickAddOption = () => {
    setOptionList([...optionList, option + '/' + count]);

    setResCount([...resCount, count]);
    setResOption([...resOption, option]);
  };

  const handleClickRemoveOption = (id: number) => {
    setOptionList(optionList.filter((v, i) => i !== id));
    setResCount(resCount.filter((v, i) => i !== id));
    setResOption(resOption.filter((v, i) => i !== id));
  };

  const tabContents: {
    label: string;
    content: JSX.Element;
  }[] = [
    {
      label: '서비스 설명',
      content: <ServiceImage />,
    },
    {
      label: '상세 정보',
      content: <ServiceImage />,
    },
    {
      label: '고객 후기',
      content: <ServiceTable data={reviewSample} />,
    },
    {
      label: '상품 문의',
      content: <ServiceTable data={questionSample} />,
    },
  ];

  return (
    <div>
      <ServiceTopContainer>
        <TopDetailContainer>
          <MiniImages />
        </TopDetailContainer>
        <TopDetailContainer>
          <h1>{service.serviceName}</h1>
          <SelectBoxAndTitle
            values={service.serviceCycle}
            value={cycle}
            title={'서비스 주기'}
            setValue={setCycle}
            type={'selectBox'}
          />
          <SelectBoxAndTitle
            values={service.availableDay}
            value={day}
            title={'서비스 받을 날짜'}
            setValue={setDay}
            type={'selectBox'}
          />
          <SelectBoxAndTitle
            values={service.categories}
            value={option}
            title={'서비스 옵션'}
            setValue={setOption}
            type={'selectBox'}
          />
          <SelectBoxAndTitle
            values={service.categories}
            value={count}
            title={'수량'}
            setValue={setCount}
          />
          <OptionButtonContainer>
            <Button onClick={handleClickAddOption}>옵션 추가</Button>
          </OptionButtonContainer>
          <OptionContainer>
            <div>
              서비스 주기 : {cycle}
              서비스 받을 날짜 :{day}
            </div>
            {optionList.map((v, i) => {
              return (
                <OptionListStyle>
                  <div>선택 옵션 {i + 1} </div>
                  <div>{v}</div>
                  <button onClick={() => handleClickRemoveOption(i)}>x</button>
                </OptionListStyle>
              );
            })}
          </OptionContainer>
          <ButtonContainer>
            <ButtonStyle>
              <Button onClick={handleClickAddCart}>장바구니</Button>
            </ButtonStyle>
            <ButtonStyle>
              <Button onClick={handleClickBuyNow}>바로구매</Button>
            </ButtonStyle>
          </ButtonContainer>
        </TopDetailContainer>
      </ServiceTopContainer>
      <ServiceDetailContainer>
        <CustomTabs
          values={tabContents}
          value={tabValue}
          setValue={setTablValue}
          handleChange={handleChangeTab}
        />
      </ServiceDetailContainer>
    </div>
  );
}

export default DetailService;

const ServiceTopContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;

  background-color: #cfcfcf;
`;

const TopDetailContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceDetailContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
  flex-direction: column;
  align-items: center;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const OptionButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ButtonStyle = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const OptionContainer = styled.div`
  background-color: #cdcdcd;
  width: 500px;
  height: 100px;
  overflow: auto;
`;

const OptionListStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
