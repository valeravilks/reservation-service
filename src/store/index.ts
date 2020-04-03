import { createBrowserHistory } from 'history';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducers from './rootReducers';
import CreateSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const sagaMiddleware = CreateSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers(history),
    composeEnhancers(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history)))
);


sagaMiddleware.run(rootSaga);

export default store;
