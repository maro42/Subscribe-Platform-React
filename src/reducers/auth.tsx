import { createReducer, createSlice } from "@reduxjs/toolkit";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import { login } from "../lib/props/auth";

const [TEST, TEST_SUCCESS, TEST_FAILURE] = createRequestActionTypes('auth/LOGIN');   // 테스트 조회
const [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes('auth/GET_USER')
// =====================================================

export const reduxApiTest = createAction(TEST,({email,password}:login) => ({
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
// redux toolkit 사용 : 불변성 유지를 자동으로 해줌 그리고 함수 안에서 콘솔찍거나 if문으로 뭐 하거나 등등 해도 됨
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

// 기존에 쓰던 것
// const test = handleActions({
//     [CHANGE_FIELD] : (state, {payload : {key, value} }) =>({ // 이거 에러아님
//         ...state,
//         [key] : value
//     }),
//     [INITIALIZE_FORM] : (state) => ({
//         ...state,
//         initialState
//     }),
//     [TEST_SUCCESS] : (state, {payload : test}) => ({
//         ...state,
//         testError : null,
//         result : test
//     }),
//     [TEST_FAILURE] : (state, {payload : error}) => ({
//         ...state,
//         testError : error,
//     }),
// },
// initialState
// );

// export default test;

// 이거 하면 되는데..... 안됨.... 짱나네.....
// const testSlice = createSlice({
//     name : 'test',
//     initialState : {
//         id : '',
//         name : '',
//         isLoading : false,
//         testError : null,
//         result : ''
//     },
//     reducers: {
//         changeField : (state, {payload : {key, value} }) => {
//             [key] = value;
//         },
//         initializeForm : (state) => {
//             state = {
//                 id : '',
//                 name : '',
//                 isLoading : false,
//                 testError : null,
//                 result : ''
//             };
//         },
//         test : (state) => {
//             state.isLoading = true;
//         },
//         testSuccess : (state, {payload : test}) => {
//             state.isLoading = false;
//             state.testError = null;
//             state.result = test;
//         },
//         testFailure : (state, {payload : error}) => {
//             state.isLoading = false;
//             state.testError = error;
//         }
//     }
// });

// export default testSlice;