export type mySubscribeListItem = {
  subscribeId: number;
  serviceName: string;
  serviceImage: string;
  deliveryCycle: string;
  deliveryDay: string;
  subscribeStartDate: string;
  subscribePeriod: number;
  options: [subsOption];
  paidCount: number;
  nextPayDate: string;
};

export type subsOption = {
  optionName: string;
  price: NumberConstructor;
  quantity: number;
};

export type cancelInfo = {
  subscribeId: number;
  cancelReasonId: number;
  cancelReasonEtc: string;
};

export type CreateServiceDto = {
  serviceId: number;
  deliveryCycle: string;
  deliveryDay: string;
  options: PickedOption[];
};

export type PickedOption = {
  optionId: number;
  quantity: number;
};
