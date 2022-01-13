import {
  BasicParam,
  SearchByCategoryId,
  SearchByServiceName,
} from '../props/service';
import { CreateServiceDto } from '../props/subscribe';
import client from './client';

export const getServicesByServiceName = (
  searchServiceListParam: SearchByServiceName,
) =>
  client
    .get('/services', {
      params: {
        serviceName: searchServiceListParam.serviceName,
        pageNum: searchServiceListParam.pageNum,
        size: searchServiceListParam.size,
      },
    })
    .then((response) => response.data);

export const getCatories = () =>
  client.get('/categories').then((response) => response.data);

export const getServicesByCategoryId = (param: SearchByCategoryId) =>
  client
    .get(`/categories/${param.categoryId}/services`, {
      params: {
        pageNum: param.pageNum,
        size: param.size,
      },
    })
    .then((response) => response.data);

export const getNewServices = (param: BasicParam) =>
  client
    .get('/services/new', {
      params: {
        pageNum: param.pageNum,
        size: param.size,
      },
    })
    .then((response) => response.data);

export const getServiceById = (serviceId: number) => client.get(`/services/${serviceId}`).then((response) => response.data);

export const postCreateShopping = (param: CreateServiceDto) =>
  client.post(`/customer/shopping`, param);
