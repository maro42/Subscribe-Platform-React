import createRequestSaga from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from "@redux-saga/core/effects";

const apiTestSaga = createRequestSaga("auth/LOGIN", authAPI.getLoginToken);
const apiGetUserSaga = createRequestSaga("auth/GET_USER", authAPI.getUserId);

export  function* loginSaga(){
    yield takeLatest("auth/LOGIN", apiTestSaga);
  
};

export  function* getUserSaga(){
    yield takeLatest("auth/GET_USER", apiGetUserSaga);
};


export default {loginSaga, getUserSaga};