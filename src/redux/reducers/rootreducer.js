import { combineReducers } from 'redux'

import dragonsReducer from './dragonsReducer'
import dragonReducer from './dragonReducer'

const rootReducer = combineReducers({
  dragons: dragonsReducer,
  dragon: dragonReducer,
})

export default rootReducer
