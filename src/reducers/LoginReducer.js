 
import {RECEIVE_API_DATA,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT,LOGOUT_RESET} from '../actions/LoginActions';

// export  function login(state = {},type){
//     switch (type) {
        
//            case LOGIN_SUCCESS:
//             return {
//                 loggedIn: true,
           
//             };
//         case LOGIN_FAILURE:
//             return {};
//         case LOGOUT:
//             return {};
       
//         default:
//             return state
//     }
// }


// const initialState = {
//     isFetching: false,
//     data: {},
//     errorMessage: "",
//   };
  
  export const resourceRequest = (state, action) => {
    return {
      ...state,
      isFetching: action.isFetching,
      errorMessage: action.errorMessage
    };
  };
  
  export const resourceSuccess = (state, action) => {
    return {
      ...state,
      isFetching: action.isFetching,
      errorMessage: action.errorMessage,
      data: action.data
    };
  };
  
  export const resourceFailure = (state, action) => {
    return {
      ...state,
      isFetching: action.isFetching,
      errorMessage: action.errorMessage,
      data: action.data
    };
  };
  
  let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
  export default (state = initialState, action) => {
  //console.log("test",JSON.stringify(action) )

    switch (action.type) {
      
      case LOGIN_SUCCESS:
        return {
            data:true,
            user:initialState.user
        }
      case LOGIN_FAILURE:
        return {};
       case LOGOUT:
         return {}; 
      case LOGOUT_RESET:
        return{
           data:{},
           user:{}
        };
      default:
        return state;
    }
  };


