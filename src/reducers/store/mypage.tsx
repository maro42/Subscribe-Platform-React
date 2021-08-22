import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../lib/createRequestSaga";
import { ListResponse, PagebleRequest } from "../../lib/props";
import { changeProps } from "../../lib/props/common";
import { Product, Service } from "../../lib/props/store";

// 액션 정의
const [GET_STOREINFO, GET_STOREINFO_SUCCESS, GET_STOREINFO_FAILURE] = createRequestActionTypes('store/mypage/GET_STOREINFO');
export const getStoreinfo = createAction(GET_STOREINFO);

const SET_MODIFY_YN = 'store/mypage/SET_MODIFY_YN';
export const setModifyYn = createAction(SET_MODIFY_YN, (value:string)=>({value}));

const CHANGE_FORM = 'store/mypage/CHANGE_FORM';
export const changeForm = createAction(CHANGE_FORM, ({key, value}:changeProps) => ({key, value}));


const [SAVE_PRODUCT_REQUEST, SVAE_PRODUCT_SUCCESS, SAVE_PRODUCT_FAILURE] = createRequestActionTypes('product/service/SAVE_PRODUCT_REQUEST');
export const saveProduct = createAction(SAVE_PRODUCT_REQUEST, (formData: FormData) => (formData));

const [GET_SERVICE_LIST_REQUEST, GET_SERVICE_LIST_SUCCESS, GET_SERVICE_LIST_FAILURE] = createRequestActionTypes('store/service/GET_SERVICE_LIST_REQUEST');
export const getServices = createAction(GET_SERVICE_LIST_REQUEST, (pageable: PagebleRequest) => ({pageable}));


type initialStateType = {
    modifyYn?: any;
    storeinfo?: any;
    error?: string;
    service?: ListResponse<Service>;
}

// 초기 값
const initialState:initialStateType = {
    modifyYn : "N",
    storeinfo : {
        email : "",
        name : "",
        store : {
            storeName : "",
            businessNum : ""
        }
    },
    error: "" ,
    
    service: {
        content: [],
        contentSize: 0,
        totCnt: 0
    }
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
    },
    [SVAE_PRODUCT_SUCCESS] :(state, {payload})=>{
      
    },
    [SAVE_PRODUCT_FAILURE] :(state, {payload:error})=>{
    state.error = error;
    },
    [GET_SERVICE_LIST_SUCCESS]: (state, { payload }) => {
        state.service = payload.value!;
    },
     [GET_SERVICE_LIST_FAILURE] :(state, {payload:error})=>{
        state.error = error;
    },

});

export default storeMypageReducer;