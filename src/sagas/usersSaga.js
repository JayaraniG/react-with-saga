import { get } from 'axios';
import { call, cancel, cancelled, fork, put, take,takeLatest } from 'redux-saga/effects';
import {GETALL_REQUEST,GETALL_SUCCESS,GETALL_FAILURE} from '../actions/LoginActions';
import {getAllsuccess} from '../actions/LoginActions';
import {config} from '../helpers/config';

export function* fetchusers() {
    try {
     const data = yield get(config.apiUrl+'/hrmsreact/api/User/GetAllUsers');
    
        yield put({ type: 'GETALL_SUCCESS',data})
     
        console.log(data)
        
    } catch (error) {
        yield put({ type: 'GETALL_FAILURE', error })
    }
    finally {
        if (yield cancelled()) {
            yield put({ type: 'GETALL_CANCELLED' })
        }
    }
}

export function* usersSaga() {
    while (true) {
        const { users} = yield take('GETALL_REQUEST')
        const task = yield fork(fetchusers,users)
       
    }
  
}

export function* deleteUsers() {
    try {
     const data = yield get(config.apiUrl+'/hrmsreact/api/User/DeleteUser/{UserId}');
    
        yield put({ type: 'DELETE_SUCCESS'})
     
        //console.log(data)
        
    } catch (error) {
        yield put({ type: 'DELETE_FAILURE', error })
    }
    finally {
        if (yield cancelled()) {
            yield put({ type: 'DELETE_CANCELLED' })
        }
    }
}

export function* DeleteUsersSaga() {
    while (true) {
        const {userId} = yield take('DELETE_REQUEST')
        const task = yield fork(deleteUsers,userId)
        
        }
    }
  



