import React, { useEffect, useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import CustomImageListItem from '../../common/CustomImageListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../../src/reducers/store/mypage';
import { Service } from '../../../src/lib/props/store';
import { Button } from '../../common';
import router from 'next/router';

function Products() {
  //이미지 리덕스로 가져와서 네네..

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getServices({
        pageNum: 0,
        size: 10,
      }),
    );
  }, [dispatch]);

  const { service } = useSelector(({ storeMypageReducer }) => ({
    service: storeMypageReducer.service,
  }));

  const handleClickService = (id: number) => {
    router.push({
      pathname: '/service',
      query: {
        serviceId: id,
      },
    });
  };

  return (
    <ImageList style={{ width: '100%' }}>
      {service.content?.map((data: Service, index: number) => {
        return (
          <div
            onClick={() => handleClickService(data.serviceId)}
            style={{ display: 'flex', height: 300 }}
          >
            <CustomImageListItem
              key={index}
              title={data.serviceName}
              src={data.thumbnailImage}
              subTitle={`${data.serviceName}${data.serviceId}`}
            />
          </div>
        );
      })}
    </ImageList>
  );
}

export default Products;
