import { get } from 'axios';
import { call, cancel, cancelled, fork, put, take,takeLatest } from 'redux-saga/effects';
import { LOGIN_SUCCESS } from '../reducers/LoginReducer';
import {history} from '../history'
import {fetchData} from '../actions/LoginActions'; 
import {loginsuccess} from '../actions/LoginActions';
import {config} from '../helpers/config';

export function* fakeAuthorize(username, password) {
    
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
              };
             // return fetch('https://localhost:44334/Users/authenticate',requestOptions)
             return fetch(config.apiUrl+'/hrmsreact/api/User/authenticate',requestOptions)
               .then(response=>response.json())
              .then(user => {
                if (user && user.token) {
                   
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', JSON.stringify(user.token));
                }
           
                return user;
            });
      
        } 
                         
         catch (error) {
         
          return error;
        }
   
}
export function* authorize(username, password) {
    try {
        const token = yield call(fakeAuthorize, username, password)
     
        yield put({ type: 'LOGIN_SUCCESS'})
        
        console.log(token)
        yield put({ type: 'SAVE_TOKEN', token });
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
        const { username, password } = yield take('LOGIN_REQUEST')
        const task = yield fork(authorize, username, password)
        const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
        if (action.type === 'LOGOUT') {
            yield cancel(task)
            yield put({ type: 'DELETE_TOKEN' })
        }
    }
  
}


export function* logActions() {
    while (true) {
        const action = yield take('*')
        console.log(action.type);
    }
}

