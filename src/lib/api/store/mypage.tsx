import { PagebleRequest } from '../../props';
import { Product, Service, storeinfo } from '../../props/store';
import client from '../client';

export const getStoreinfo = () => client.get('/user/store/getStoreinfo');

export const updateStoreinfo = (storeinfo: storeinfo) =>
  client.patch('/store/service', storeinfo);

export const getServiceList = (pageble: PagebleRequest) =>
  client.get(`/store/services`, {
    params: {
      pageNum: pageble.pageNum,
      size: pageble.size,
    },
  });

export const saveProduct = (data: FormData) =>
  client.post('/store/service', data, {
    headers: {
      'Content-Type': `multipart/form-data; `,
    },
  });
