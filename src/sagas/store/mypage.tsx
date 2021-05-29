import { takeLatest } from '@redux-saga/core/effects';
import * as storeMypageAPI from '../../lib/api/store/mypage';
import createRequestSaga from "../../lib/createRequestSaga";

const getStoreinfoSaga = createRequestSaga("store/mypage/GET_STOREINFO", storeMypageAPI.getStoreinfo);

export function* storeMypageSaga(){
    yield takeLatest("store/mypage/GET_STOREINFO", getStoreinfoSaga);
};

export default{storeMypageSaga};