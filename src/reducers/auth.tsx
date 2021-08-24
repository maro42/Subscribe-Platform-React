import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "redux-actions";
import {createRequestActionTypes} from '../lib/createRequestSaga';
import { login } from "../lib/props/auth";

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');   // 테스트 조회
const [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes('auth/GET_USER')

// =====================================================

export const reduxLogin = createAction(LOGIN,({email,password}:login) => ({
  email, password
}));

export const reduxGetUserId = createAction(GET_USER_REQUEST, (id:any) =>({
    id
}));

// =====================================================

const initialState = {
    loginYn : 'N',
    auth : null,
    authError : '',
    user : '',
}

const loginReducer = createReducer(initialState,{
    [LOGIN_SUCCESS] : (state, {payload : res}) =>{
        if(res.token !== null){
            state.loginYn = 'Y';
            state.auth = res.auths;
            localStorage.setItem('Authorization', res.token);
            alert("로그인되었습니다.");
        }
    },
    [LOGIN_FAILURE] : (state, {payload : error}) =>{
        state.authError = error;
        state.loginYn = 'N';
        state.auth = null;
        alert("로그인 실패했습니다.");
    },

    [GET_USER_SUCCESS] : (state, {payload : user}) =>{
        state.user = user;
    },

    [GET_USER_FAILURE] : (state, {payload : error}) =>{
        state.user = error;
    },

});

export default loginReducer;