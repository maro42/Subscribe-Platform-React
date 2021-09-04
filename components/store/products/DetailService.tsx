import React, { useState } from 'react';
import { ServiceDto } from '../../../src/lib/props/service';
import styled from 'styled-components';
import { SelectBox } from '../../common';
import CustomTabs from '../../common/CustomTabs';
import ServiceImage from './ServiceImage';
import ServiceTable from './ServiceTable';
import { SelectBoxResponse } from '../../../src/lib/props';

const serviceSample: ServiceDto = {
  serviceId: 1,
  serviceName: '견과류 1',
  serviceCycle: 'WEEK',
  availableDay: '월',
  detailContents: '안녕하세요',
  serviceOptions: [
    {
      maxCount: 10,
      optionName: 'Option1',
      price: 10000,
      stock: 500,
    },
    {
      maxCount: 10,
      optionName: 'Option2',
      price: 20000,
      stock: 500,
    },
    {
      maxCount: 10,
      optionName: 'Option3',
      price: 30000,
      stock: 500,
    },
  ],
  serviceImages: [],
  categories: [
    {
      value: 1,
      label: '식품',
    },
  ],
};

type SelectBoxContainerProps = {
  values: SelectBoxResponse;
  title: string;
  value: string | number;
  set;
};

function SelectBoxContainer() {}

function DetailService() {
  const service: ServiceDto = serviceSample;

  const [tabValue, setTablValue] = useState(0);
  const [cycle, setCycle] = useState('');
  const [day, setDay] = useState('');
  const [count, setCount] = useState('');
  const [option, setOption] = useState('');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTablValue(newValue);
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
      content: <ServiceTable />,
    },
    {
      label: '상품 문의',
      content: <ServiceTable />,
    },
  ];

  return (
    <div>
      <ServiceTopContainer>
        <TopDetailContainer>
          <MainImageContainer>이미지 1</MainImageContainer>
          <MiniImageContainer>
            <MiniImage>miniImage1</MiniImage>
            <MiniImage>miniImage2</MiniImage>
            <MiniImage>miniImage3</MiniImage>
            <MiniImage>miniImage4</MiniImage>
          </MiniImageContainer>
        </TopDetailContainer>
        <TopDetailContainer>
          <p>{service.serviceName}</p>
          <SelectBox values={service.categories} />
          <SelectBox values={service.categories} />
          <SelectBox values={service.categories} />
          <SelectBox values={service.categories} />
        </TopDetailContainer>
      </ServiceTopContainer>
      <ServiceDetailContainer>
        <CustomTabs
          values={tabContents}
          value={tabValue}
          setValue={setTablValue}
          handleChange={handleChange}
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

const MainImageContainer = styled.div`
  background-color: #cfcfcf;
  width: 70%;
  height: 400px;
`;

const MiniImageContainer = styled.div`
  width: 70%;
  height: 100px;
  background-color: #afafaf;
  display: flex;
`;

const MiniImage = styled.div`
  width: 50%;
  height: 20%;
  background-color: #afafaf;
`;

const ServiceDetailContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
  flex-direction: column;
  align-items: center;
`;
