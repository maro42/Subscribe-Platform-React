import {
  DeilveryCountReqDto,
  DeliveriesReqDto,
  DeliveryDetailReqDto,
} from '../../props/delivery';
import client from '../client';

export const getDeliveriesDateAndCount = (param: DeilveryCountReqDto) =>
  client
    .get(`store/${param.storeId}/deliveries/calendar`, {
      params: { month: param.month },
    })
    .then((response) => response.data);

export const getDeliveries = (param: DeliveriesReqDto) =>
  client
    .get(`/store/${param.storeId}/deliveries/${param.type}`, {
      params: {
        date: param.date,
      },
    })
    .then((res) => res.data);

export const getDeliveryDetail = (param: DeliveryDetailReqDto) =>
  client
    .get(`/service/${param.subscribeId}/options`)
    .then((response) => response.data);
