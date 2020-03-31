import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './login/saga';

export default function* rootSaga(){
    yield all([
        watchIncrementAsync()
    ])
}