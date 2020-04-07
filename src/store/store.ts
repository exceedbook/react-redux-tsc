import { createStore, Store, applyMiddleware, compose, combineReducers, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer as rootReducer, MODULE_NAME as CORE_MODULE_NAME} from '@/core';

type IComposer = any;

const createRootReducer = (): Reducer => {
  return combineReducers({
    [CORE_MODULE_NAME]: rootReducer,
  });
};

export default (): Store  => {
  const composer: IComposer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

  const store: Store = createStore(createRootReducer(),  {},
  composer(applyMiddleware(thunk))
  );
  
  return store
}
