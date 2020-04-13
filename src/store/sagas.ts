import { all } from 'redux-saga/effects';
import {watchCheckAuth, watchIncrementAsync, watchLoginOut} from './login/saga';

export default function* rootSaga(){
    yield all([
        watchIncrementAsync(),
        watchLoginOut(),
        watchCheckAuth()
    ])
}