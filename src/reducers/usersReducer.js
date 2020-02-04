import {GETALL_REQUEST,GETALL_SUCCESS,GETALL_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE} from '../actions/LoginActions';

export default(state = {}, action)=> {
    switch (action.type) {
      case GETALL_REQUEST:
        return {
          loading: true
        };
      case GETALL_SUCCESS:
        return {
          users: action.data.data
        };
      case GETALL_FAILURE:
        return { 
          error: action.error
        };
        case DELETE_REQUEST:
          return{
            ...state,
            users: state.users.map(user =>
              user.userId === action.userId
                ? { ...user, deleting: true }
                : user
            )
          };
          case DELETE_SUCCESS:
               return{
                users: state.users.filter(user => user.userId !== action.userId)
               };
            case DELETE_FAILURE:
              return{};
        default:
            return state; 
    }
}