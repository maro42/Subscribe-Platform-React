import {createAction, handleActions} from 'redux-actions';

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

// 요청을 위한 액션 타입을 payload로 설정(예 : sample/GET_POST)

export const startLoading = createAction(
    START_LOADING,
    (requestType:string) => requestType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    (requestType:string) => requestType
);

const initalState = {};

const loading = handleActions(
    {
        [START_LOADING] : (state, action:any) => ({
            ...state,
            [action.payload] : true,
        }),
        [FINISH_LOADING] : (state, action:any) => ({
            ...state,
            [action.payload] : false,
        }),
    },
    initalState,
);

export default loading;