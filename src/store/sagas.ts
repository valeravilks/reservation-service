import { all } from 'redux-saga/effects';
import {watchCheckAuth, watchIncrementAsync, watchLoginOut, watchInitAuth} from './login/saga';

export default function* rootSaga(){
    yield all([
        watchIncrementAsync(),
        watchLoginOut(),
        watchCheckAuth(),
        watchInitAuth()
    ])
}