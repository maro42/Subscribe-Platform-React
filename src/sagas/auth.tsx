import createRequestSaga from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from "@redux-saga/core/effects";

const apiTestSaga = createRequestSaga("auth/LOGIN", authAPI.getLoginToken);
const apiGetUserSaga = createRequestSaga("auth/GET_USER", authAPI.getUserId);
const apiConfirmLoginSaga = createRequestSaga('auth/CONFIRM_LOGIN', authAPI.confirmLogin);

export  function* loginSaga(){
    yield takeLatest("auth/LOGIN", apiTestSaga);
  
};

export  function* getUserSaga(){
    yield takeLatest("auth/GET_USER", apiGetUserSaga);
};

export function* confirmLoginSaga(){
    yield takeLatest("auth/CONFIRM_LOGIN", apiConfirmLoginSaga);
}


export default {loginSaga, getUserSaga, confirmLoginSaga};