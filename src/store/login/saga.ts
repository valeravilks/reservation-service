import { takeEvery, put } from 'redux-saga/effects';
import { singIn3 } from "../firebase/firebase";

function* SingIn(props:any){
    // yield delay(5000);
    console.log(11111);
    yield put({type: "SING_IN", name: '123'});
    try{
        yield singIn3();
        console.log('Ehf');
    } catch (e) {
        console.log(e)
    }


}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', SingIn)
}