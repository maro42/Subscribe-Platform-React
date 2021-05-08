import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "redux-actions";
import {createRequestActionTypes} from '../lib/createRequestSaga';
import { login } from "../lib/props/auth";

const [TEST, TEST_SUCCESS, TEST_FAILURE] = createRequestActionTypes('auth/LOGIN');   // 테스트 조회
const [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes('auth/GET_USER')

// =====================================================

export const reduxLogin = createAction(TEST,({email,password}:login) => ({
  email, password
}));

export const reduxGetUserId = createAction(GET_USER_REQUEST, (id:any) =>({
    id
}));

// =====================================================

const initialState = {
    token : '',
    testError : '',
    user : '',
}

const loginReducer = createReducer(initialState,{
    [TEST_SUCCESS] : (state, {payload : test}) =>{
        state.token = test;
        
        localStorage.setItem('Authorization', state.token);
    },
    [TEST_FAILURE] : (state, {payload : error}) =>{
        state.testError = error;
    },

    [GET_USER_SUCCESS] : (state, {payload : user}) =>{
        console.log(user);
        state.user = user;
    },

    [GET_USER_FAILURE] : (state, {payload : error}) =>{
        state.user = error;
    },

});

export default loginReducer;