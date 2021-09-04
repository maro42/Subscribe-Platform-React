import {
  BasicParam,
  SearchByCategoryId,
  SearchByServiceName,
} from '../props/service';
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
