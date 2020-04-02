import { takeEvery, put } from 'redux-saga/effects';
import Firebase from "../firebase";
import {SING_IN_EMAIL} from "./types";

function* SingInBase(props:any){
    yield put({type: "SING_IN", name: '123'});
    try{
        yield Firebase.singIn(props.email, props.pass);
        console.log('SingIn');
    } catch (e) {
        console.log(e)
    }
}

export function* watchIncrementAsync() {
    yield takeEvery(SING_IN_EMAIL, SingInBase)
}