import { combineReducers } from 'redux'

import polylineReducer from './polylineReducer'

const rootReducer = combineReducers({
  polyline: polylineReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
