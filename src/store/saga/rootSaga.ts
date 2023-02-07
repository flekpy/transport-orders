import { all, fork } from 'redux-saga/effects'

import routePolylineSaga from './getPolylineSaga'

export default function* rootSaga() {
  yield all([fork(routePolylineSaga)])
}
