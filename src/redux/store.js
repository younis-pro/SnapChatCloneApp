import rootReducer from './reducer';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';


import thunk from "redux-thunk";

const middlewares = [thunk]

export default createStore(rootReducer, applyMiddleware(...middlewares))