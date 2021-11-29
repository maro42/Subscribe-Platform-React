import { ListResponse } from '.';

export type DeilveryCountReqDto = {
  storeId: number;
  month?: number;
};

export type DeliveriesReqDto = {
  storeId: number;
  date?: string;
  type?: 'year' | 'month' | 'week' | 'day';
};

export type DeliveryDetailReqDto = {
  subscribeId: number;
};

export type DeliveryCountType = {
  count: number;
  date: string;
};

export type DeliveriesType = {
  complete: boolean;
  serviceName: string;
  subscribeId: number;
};

export type DeliveryDetailType = {
  address: {
    address1: string;
    address2: string;
    zipCode: string;
  };
  options: ListResponse<DeliveryDetail>;
};

export type DeliveryDetail = {
  optionName: string;
  quantity: number;
};
