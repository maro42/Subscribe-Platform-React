import createRequestSaga from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from "@redux-saga/core/effects";

const apiTestSaga = createRequestSaga("auth/LOGIN", authAPI.getLoginToken);

export default function* loginSaga(){
    yield takeLatest("auth/LOGIN", apiTestSaga);
    // 여기에 관련된 거 있으면 추가
}