import { takeEvery, put } from 'redux-saga/effects';

const delay = (ms:any) => new Promise(res => setTimeout(res, ms))

export function* SingIn(){
    yield delay(1000);
    yield put({type: "SING_IN", name: 'sdf'});
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', SingIn)
}