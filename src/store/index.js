import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

const middleware = [];

const createAppropiateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropiateStore(reducers, applyMiddleware(...middleware));

export default store;
