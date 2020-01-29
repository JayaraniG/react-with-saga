import { get } from 'axios';
import { call, cancel, cancelled, fork, put, take,takeLatest } from 'redux-saga/effects';
//import { LOGIN_REQUEST } from '../reducers/LoginReducer';
import {history} from '../history'
 


export function* fakeAuthorize(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
           // const result = await fetch('https://localhost:44334/Users/getAll');
        const result=await get('http://www.mocky.io/v2/5e3186f63200004f008885f4');
           // console.log('result',result);
           //  localStorage.setItem("user",result.data)
            // let res=(result.data)
          resolve(result.data);
        // return (result.data);
          // history.push('/Password');
        } catch (error) {
            reject(error);
        }
    });
}

export function* authorize(email, password) {
    try {
        const data = yield call(fakeAuthorize, email, password)
        yield put({ type: 'LOGIN_SUCCESS' })
        console.log(data)
        yield put({ type: 'SAVE_TOKEN', data });
    } catch (error) {
        yield put({ type: 'LOGIN_ERROR', error })
    }
    finally {
        if (yield cancelled()) {
            yield put({ type: 'LOGIN_CANCELLED' })
        }
    }
}

export function* saga() {
    while (true) {
        const { email, password } = yield take('LOGIN_REQUEST')
        const task = yield fork(authorize, email, password)
        const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
        if (action.type === 'LOGOUT') {
            yield cancel(task)
            yield put({ type: 'DELETE_TOKEN' })
        }
    }
   // yield takeLatest(LOGIN_REQUEST, authorize);
}


export function* logActions() {
    while (true) {
        const action = yield take('*')
        console.log(action.type);
    }
}

