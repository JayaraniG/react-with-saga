  //import {fakeAuthorize} from '../sagas'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const  LOGOUT_RESET='LOGOUT_RESET';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_CANCELLED = 'LOGIN_CANCELLED';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';
export const  LOGIN_FAILURE=' LOGIN_FAILURE';
export const  GETALL_REQUEST= 'GETALL_REQUEST';
export const  GETALL_SUCCESS= 'GETALL_SUCCESS';
export const  GETALL_FAILURE='GETALL_FAILURE';
export const GETALL_CANCELLED = 'LOGIN_CANCELLED';
 export const DELETE_REQUEST= 'DELETE_REQUEST';
 export const  DELETE_SUCCESS= 'DELETE_SUCCESS';
 export const  DELETE_FAILURE= 'DELETE_FAILURE';   
 export const  DELETE_CANCELLED= 'DELETE_CANCELLED'; 
 

export const userActions = {
  
  logoutReset,
  delete:_delete
 
};

export  function loginRequest (username, password) {
    return {
    type: LOGIN_REQUEST,
    username,
    password,
  }
}
 function logoutReset()
{
return{
  type:LOGOUT_RESET
}

}

export  function getAllRequest () {
  return {
  type: GETALL_REQUEST,
  
}
}
export  function _delete (userId) {
  return {
  type: DELETE_REQUEST,
  userId
  }
}

  // export function fetchData(username, password){
    
  //       try {

  //           const requestOptions = {
  //               method: 'POST',
  //               headers: { 'Content-Type': 'application/json' },
  //               body: JSON.stringify({ username, password })
  //             };
  //             return fetch('https://localhost:44334/Users/authenticate',requestOptions);
  //          //const user=await response.json();
  //          //  return user;
      
  //       } catch (error) {
        
  //         return error;
  //       }
  
  //     }
  // export function loginsuccess(username,password)
  // {
  //   return dispatch =>
  //   fakeAuthorize(username, password)
  //   .then(data=>
  //     {
  //       dispatch(success());
  //     });
    
  // }
  // function success(data) { return { type: LOGIN_SUCCESS, data } }