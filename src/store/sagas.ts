import { all } from 'redux-saga/effects';
import {watchIncrementAsync, watchLoginOut} from './login/saga';

export default function* rootSaga(){
    yield all([
        watchIncrementAsync(),
        watchLoginOut()
    ])
}