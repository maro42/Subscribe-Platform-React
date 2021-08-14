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

export const saveProduct = (data: any) => {
  const formData: Product = data.formData!;

  console.log(formData);

  const form = new FormData();

  // formData.serviceImages?.forEach((s) => {
  //   form.append('serviceImages[]', s);
  // });

  form.append('serviceName', formData.serviceName!);
  form.append('serviceCycle', formData.serviceCycle!);
  form.append('availableDay', formData.availableDay!);
  form.append('detailContents', formData.etc!);

  formData.serviceImages?.forEach((v) => {
    form.append('serviceImages', v!);
  });

  for (var pair of form.entries()) {
    console.log('>>>>>>>>', pair[0] + ', ' + pair[1]);
  }

  client.post('/service/store/addService', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
