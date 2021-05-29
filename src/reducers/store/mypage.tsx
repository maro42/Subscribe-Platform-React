import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../lib/createRequestSaga";
import { changeProps } from "../../lib/props/common";

// 액션 정의
const [GET_STOREINFO, GET_STOREINFO_SUCCESS, GET_STOREINFO_FAILURE] = createRequestActionTypes('store/mypage/GET_STOREINFO');
export const getStoreinfo = createAction(GET_STOREINFO);

const SET_MODIFY_YN = 'store/mypage/SET_MODIFY_YN';
export const setModifyYn = createAction(SET_MODIFY_YN, (value:string)=>({value}));

const CHANGE_FORM = 'store/mypage/CHANGE_FORM';
export const changeForm = createAction(CHANGE_FORM, ({key, value}:changeProps) => ({key, value}));

// 초기 값
const initialState = {
    modifyYn : "N",
    storeinfo : {
        email : "",
        name : "",
        store : {
            storeName : "",
            businessNum : ""
        }
    },
    error : ""
};

const storeMypageReducer = createReducer(initialState,{
    [GET_STOREINFO_SUCCESS] : (state, {payload : storeinfo}) => {
        state.storeinfo.email = storeinfo.email;
        state.storeinfo.name = storeinfo.name;
        state.storeinfo.store.storeName = storeinfo.storeName;
        state.storeinfo.store.businessNum = storeinfo.businessNum;
    },
    [GET_STOREINFO_FAILURE] : (state, {payload : error}) => {
        state.error = error;
    },
    [SET_MODIFY_YN] : (state, {payload}) => {
        state.modifyYn = payload.value;
    },
    [CHANGE_FORM] : (state, {payload: {key, value}}) => {
        state.storeinfo.store.[key] = value;
    }
});

export default storeMypageReducer;