//import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT } from '../actions/LoginActions';
import LoginActions from '../actions/LoginActions';
  
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};


export  function login(state = initialState, action) {
    switch (action.type) {
        // case LoginActions.LOGIN_REQUEST:
        //     return {
        //         loggingIn: true,
        //         user: action.user
        //     };
        case LoginActions.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case LoginActions.LOGIN_FAILURE:
            return {};
        case LoginActions.LOGOUT:
            return {};
        default:
            return state
    }
}



//  import LoginActions from '../actions/LoginActions';

//  import { LOGGED_IN, LOGGED_OUT, LOGIN_CANCELLED, LOGIN_ERROR } from '../statustypes';
//  import initialstate from '../initialstate';


// export  function login (state = initialstate.Login, action) {
//   let newState;
//   switch (action.type) {
//     case LoginActions.LOGIN_SUCCESS:
//       newState = {...state, status: LOGGED_IN};
//       return newState;
//     case LoginActions.SAVE_TOKEN:
//       newState = {...state, token: action.token};
//       newState.token = action.token;
//       return newState;
//     case LoginActions.DELETE_TOKEN:
//       newState = {...state, token: null};
//       newState.token = null;
//       return newState;
//     case LoginActions.LOGOUT:
//       newState = {...state, status: LOGGED_OUT};
//       return newState;
//     case LoginActions.LOGIN_ERROR:
//       newState = {...state, status: LOGIN_ERROR};
//       return newState;
//     case LoginActions.LOGIN_CANCELLED:
//       newState = {...state, status: LOGIN_CANCELLED};
//       return newState;
//     default:
//       return state;
//   }
// }
