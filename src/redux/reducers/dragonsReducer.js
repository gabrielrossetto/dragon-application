import * as actions from '../actions/dragonsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  items: [],
}

export default function dragonsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DRAGONS:
      return { ...state, loading: true }
    case actions.GET_DRAGONS_SUCCESS:
      return { items: action.payload, loading: false, hasErrors: false }
    case actions.GET_DRAGONS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
