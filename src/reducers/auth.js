import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/ActionTypes'
 
let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};
 
const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        admin: action.admin
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        admin: action.admin
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state
  }
}
export default auth
