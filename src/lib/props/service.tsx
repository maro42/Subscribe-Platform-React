import { SelectBoxResponse } from '.';

export type SearchByServiceName = {
  serviceName: string;
  pageNum: number;
  size: number;
};

export type SearchByCategoryId = {
  categoryId: number;
  pageNum: number;
  size: number;
};

export type BasicParam = {
  pageNum: number;
  size: number;
};

export type ServiceDto = {
  availableDay: string;
  categories: SelectBoxResponse[];
  detailContents: string;
  serviceCycle: string;
  serviceId: number;
  serviceImages: serviceImages[];
  serviceName: string;
  serviceOptions: serviceOptions[];
};

export type serviceOptions = {
  maxCount: number;
  optionName: string;
  price: number;
  stock: number;
};

export type serviceImages = {
  imageSeq: number;
  imageType: string;
  imageUrl: string;
};

export type categories = {
  categoryId: number;
  categoryName: string;
};
