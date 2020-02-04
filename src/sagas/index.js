import { all, fork, put, takeLatest } from 'redux-saga/effects';

import {saga} from '../sagas/loginSaga';
import {usersSaga} from '../sagas/usersSaga';
import {DeleteUsersSaga} from '../sagas/usersSaga';

export default function* rootSaga() {
  yield all([
    saga(),
    usersSaga(),
    DeleteUsersSaga()
  ]);
}
