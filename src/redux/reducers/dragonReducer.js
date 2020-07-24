import * as actions from '../actions/dragonActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  item: [],
  dialogOpen: false
}

export default function dragonReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DRAGON:
      return { ...state, loading: true }
    case actions.GET_DRAGON_SUCCESS:
      return { ...state, item: action.payload, loading: false, hasErrors: false }
    case actions.GET_DRAGON_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.POST_DRAGON:
      return { ...state, loading: true }
    case actions.POST_DRAGON_SUCCESS:
      return { ...state, item: action.payload, loading: false, hasErrors: false }
    case actions.GET_DRAGON_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.DELETE_DRAGON:
      return { ...state, loading: true }
    case actions.DELETE_DRAGON_SUCCESS:
      return { ...state, item: action.payload, loading: false, hasErrors: false }
    case actions.DELETE_DRAGON_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.OPEN_EDIT_DIALOG:
      return { ...state, item: action.payload, dialogOpen: true }
    case actions.CLOSE_EDIT_DIALOG:
      return { ...state, item: [], dialogOpen: false }
    default:
      return state
  }
}
