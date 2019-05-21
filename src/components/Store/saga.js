import {CloseModalAction} from '../Action/Types';
import {takeEvery,put,delay} from 'redux-saga/effects';

function* closeModalAsync(){
    yield delay(5000);
    yield put({type:"CloseModal_Async"})
}

export function* watchModalClose(){
    yield takeEvery(CloseModalAction,closeModalAsync);
}