import { takeLatest } from '@redux-saga/core/effects';
import * as storeMypageAPI from '../../lib/api/store/mypage';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';

const getStoreinfoSaga = createRequestSaga(
  'store/mypage/GET_STOREINFO',
  storeMypageAPI.getStoreinfo,
);

const saveProduct = createRequestSaga(
  'product/service/SAVE_PRODUCT_REQUEST',
  storeMypageAPI.saveProduct,
);

const getServiceList = createRequestSaga(
  'store/service/GET_SERVICE_LIST_REQUEST',
  storeMypageAPI.getServiceList,
);

export function* storeMypageSaga() {
  yield takeLatest('store/mypage/GET_STOREINFO', getStoreinfoSaga);
}

export function* savePRoductSaga() {
  yield takeLatest('product/service/SAVE_PRODUCT_REQUEST', saveProduct);
}

export function* getServiceListSage() {
  yield takeLatest('store/service/GET_SERVICE_LIST_REQUEST', getServiceList);
}

export default { savePRoductSaga, storeMypageSaga, getServiceListSage };
