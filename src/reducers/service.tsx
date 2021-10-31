import { createReducer } from '@reduxjs/toolkit';
import { createAction } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

import { CreateServiceDto } from '../lib/props/subscribe';

const [SAVE_SHOPPING_REQUEST, SAVE_SHOPPING_SUCCESS, SAVE_SHOPPING_FAILURE] =
  createRequestActionTypes('service/SAVE_SHOPPING_REQUEST');
export const saveShopping = createAction(
  SAVE_SHOPPING_REQUEST,
  (service: CreateServiceDto) => service,
);

type initialStateType = {
  error?: string;
};

// 초기 값
const initialState: initialStateType = {
  error: '',
};

const serviceReducer = createReducer(initialState, {
  [SAVE_SHOPPING_SUCCESS]: (state, { payload }) => {},
  [SAVE_SHOPPING_FAILURE]: (state, { payload: error }) => {
    state.error = error;
  },
});

export default serviceReducer;
