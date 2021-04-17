import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import loading from './loading';
import test from './test';

const rootReducer = (state:any, action:any) => {
    switch(action.type){
        case HYDRATE:
        return action.payload;
        default:{
            const combineReducer = combineReducers({
                loading,
                test,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;