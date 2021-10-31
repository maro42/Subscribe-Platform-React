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
  price: number;
  quantity: number;
};

export type cancelInfo = {
  subscribeId: number;
  cancelReasonId: number;
  cancelReasonEtc: string;
};

export type shoppingInfo = {
  subscribeId: number;
  serviceName: string;
  serviceImage: string;
  options: [subsOption];
  deliveryCycle: string;
  deliveryDay: string;
};

export type reqPayInfo = {
  subscribeIds: [number];
  creditCardCompany: string;
  cardNo: string;
};

export type paymentResultParam = {
  startDate: string;
  endDate: string;
  serviceName: string;
};

export type resPaymentResult = {
  serviceNames: [string];
  creditCardCompany: string;
  paidCardNo: string;
  payPrice: number;
  payDate: string;
};
