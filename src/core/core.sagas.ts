import {
  put, 
  takeLatest } from 'redux-saga/effects';


import * as actions from './core.actions';


function* checkAuthSaga() {
 try {
   yield put(actions.setAuthLoading.success());

   yield put(actions.checkAuth.success());
   
   yield put(actions.setAuthLoading.failure());
 } catch (ex) {
  yield put(actions.checkAuth.failure());
  yield put(actions.setAuthLoading.failure());
   console.error(ex);
 }
}

export default function*() {
 yield takeLatest(actions.checkAuth.request, checkAuthSaga);

}
