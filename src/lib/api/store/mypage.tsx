import { PagebleRequest } from '../../props';
import { Product, Service, storeinfo } from '../../props/store';
import client from '../client';

export const getStoreinfo = () => client.get('/user/store/getStoreinfo');

export const updateStoreinfo = (storeinfo: storeinfo) =>
  client.put('/user/store/updateStoreinfo', storeinfo);

export const getServiceList = (pageble: PagebleRequest) => {
  client.get(`/service/store/getServiceList`, {
    params: {
      pageNum: pageble.pageNum,
      size: pageble.size,
    },
  });
};

export const saveProduct = (data: FormData) =>
  client.post('/service/store/addService', data);
