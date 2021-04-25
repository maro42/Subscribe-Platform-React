import { createReducer, createSlice } from "@reduxjs/toolkit";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import { testProps } from "../lib/props/test";

const CHANGE_FIELD = 'test/CHANGE_FIELD';
const INITIALIZE_FORM = 'test/INITIALIZE_FORM';

const [TEST, TEST_SUCCESS, TEST_FAILURE] = createRequestActionTypes('test/TEST');   // 테스트 조회

// =====================================================

type changeProps = {
    key : string,
    value : string
}
export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}:changeProps) => ({
        key, value
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM);

export const reduxApiTest = createAction(TEST,({id, name}:testProps) => ({
    id,
    name
}));

// =====================================================

const initialState = {
    id : '',
    name : '',
}

// redux toolkit 사용 : 불변성 유지를 자동으로 해줌 그리고 함수 안에서 콘솔찍거나 if문으로 뭐 하거나 등등 해도 됨
const test = createReducer(initialState,{
    [CHANGE_FIELD] : (state, {payload : {key, value} }) => {
        console.log(key);
        state.[key] = value;
    },
    [INITIALIZE_FORM] : (state) => {
        state = initialState;
    },
    [TEST_SUCCESS] : (state, {payload : test}) =>{
        state.testError = null;
        state.result = test;
    },
    [TEST_FAILURE] : (state, {payload : error}) =>{
        state.testError = error;
    }
});

export default test;

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