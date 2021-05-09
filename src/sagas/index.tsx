import {all} from "redux-saga/effects";
import testSaga from "./test";
import * as authSaga from './auth'

export default function* rootSaga(){
    yield all([
        // 사가 등록
        testSaga(),
        authSaga.loginSaga(),
        authSaga.getUserSaga()
    ]);
}