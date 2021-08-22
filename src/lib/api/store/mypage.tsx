import { Product, storeinfo } from '../../props/store';
import client from '../client';

export const getStoreinfo = () => client.get('/user/store/getStoreinfo');

export const updateStoreinfo = (storeinfo: storeinfo) =>
  client.put('/user/store/updateStoreinfo', storeinfo);

export const saveProduct = (data:FormData) => client.post('/service/store/addService', data);