import createRequestSaga from "../lib/createRequestSaga";
import * as testAPI from '../lib/api/test';
import { takeLatest } from "@redux-saga/core/effects";

const apiTestSaga = createRequestSaga("test/TEST", testAPI.apiTest);

export default function* testSaga(){
    yield takeLatest("test/TEST", apiTestSaga);
    // 여기에 관련된 거 있으면 추가
}