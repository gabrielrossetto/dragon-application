import * as actions from '../actions/authActions'

export const initialState = username ?
      {
            loggedIn: true,
            username
      } :
      {
            loggedIn: true,
            username: {}
      }

export default function dragonsReducer(state = initialState, action) {
      switch (action.type) {
            case actions.LOGIN:
                  return state
            case actions.LOGIN_SUCCESS:
                  return { ...state, loggedIn: true, username: action.payload }
            case actions.LOGIN_FAILURE:
                  return { ...state, loggedIn: false, username: {} }
            default:
                  return state
      }
}
