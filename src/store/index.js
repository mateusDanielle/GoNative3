import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const createAppropiateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropiateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
