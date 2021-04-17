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

const test = handleActions({
    [CHANGE_FIELD] : (state, {payload : {key, value} }) =>({ // 이거 에러아님
        ...state,
        [key] : value
    }),
    [INITIALIZE_FORM] : (state) => ({
        ...state,
        initialState
    }),
    [TEST_SUCCESS] : (state, {payload : test}) => ({
        ...state,
        testError : null,
        result : test
    }),
    [TEST_FAILURE] : (state, {payload : error}) => ({
        ...state,
        testError : error,
    }),
},
initialState
);

export default test;