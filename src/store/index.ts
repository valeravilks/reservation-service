import {createStore, applyMiddleware, compose} from "redux";
import rootReducers from './rootReducers';
import CreateSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = CreateSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);


sagaMiddleware.run(rootSaga);

export default store;
