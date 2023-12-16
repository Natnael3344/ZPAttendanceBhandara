import { loginConstants } from './Login.actions';

const intialState = {
  loading: false,
  user: {},
}

export function login(state = intialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      })
    case loginConstants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      })
    case loginConstants.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      })
    case loginConstants.USER_LOGOUT:   
      return intialState;   
    default:
      return state
  }
}