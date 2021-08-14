export type storeinfo = {
  storeName: string;
  businessNum: string;
};
export type Product = {
  serviceName?: string;
  category?: string;
  subCategory?: string;
  serviceCycle?: string;
  availableDay?: string;
  maxCount?: string;
  serviceOptions?: string[];
  serviceImages?: string[];
  deliveryOption?: string;
  etc?: string;
};

export type Service = {
  serviceId: number;
  serviceName: string;
  thumbnailImage: string;
};
