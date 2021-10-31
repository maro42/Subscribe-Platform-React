import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import loading from './loading';
import test from './test';
import loginReducer from './auth';
import serviceReducer from './service';
import storeMypageReducer from './store/mypage';

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        loading,
        test,
        loginReducer,
        storeMypageReducer,
        serviceReducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
