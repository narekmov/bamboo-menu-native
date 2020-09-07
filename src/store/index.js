import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  return createStore(AppReducer, initialState, enhancer);
};

const store = configureStore({});
export default store;
