import { all } from 'redux-saga/effects';
import testSaga from './test';
import * as authSaga from './auth';
import * as serviceSaga from './servciec';
import * as storeMypageSaga from './store/mypage';

export default function* rootSaga() {
  yield all([
    // 사가 등록
    testSaga(),
    authSaga.loginSaga(),
    authSaga.getUserSaga(),
    authSaga.confirmLoginSaga(),
    storeMypageSaga.storeMypageSaga(),
    storeMypageSaga.savePRoductSaga(),
    storeMypageSaga.getServiceListSage(),
    serviceSaga.savePRoductSaga(),
  ]);
}
