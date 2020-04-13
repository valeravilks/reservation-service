import { takeEvery, put } from 'redux-saga/effects';
import Firebase from "../firebase";
import {CHECK_AUTH, LOGIN_OUT, SING_IN_EMAIL} from "./types";
import { push } from 'connected-react-router'
import { errorAuthAction, authProcessAction, isAuth } from "./action";

function* SingInBase(props:any){
    yield put(authProcessAction(true));
    try{
        yield Firebase.singIn(props.email, props.pass);
        yield put(errorAuthAction(false));
        yield put(isAuth(true));
        yield put(push('/account'));
    } catch (e) {
        // TODO Added handling error
        yield put(errorAuthAction(true));
    }
    yield put(authProcessAction(false));
}

export function* watchIncrementAsync() {
    yield takeEvery(SING_IN_EMAIL, SingInBase)
}

function* baseLoginOut(props:any){
    try {
        yield Firebase.singOut();
        yield put(isAuth(false));
        yield put(push('/'));
    } catch (e) {
        console.log(e)
    }
}

export function* watchLoginOut() {
    yield takeEvery(LOGIN_OUT, baseLoginOut)
}

export function* watchCheckAuth() {
    yield takeEvery(CHECK_AUTH, baseCheckAuth);
}

function* baseCheckAuth(props:any){
    try {
        const isAuths = yield Firebase.inAuth();
        yield put(isAuth(isAuths));
        if(isAuths){
            yield put(push('/account'))
        }
    } catch (e) {
        console.log(e)
    }
}