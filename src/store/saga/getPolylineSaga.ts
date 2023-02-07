import { put, call, takeEvery, all, fork } from 'redux-saga/effects'

import { getRoutePolylineAxios } from '../../services/getPolylineServices'
import * as actionCreators from '../actionCreators/polylineActionCreators'
import { IData } from '../../interface/routePolylineResponse.interface'
import * as actionTypes from '../actionTypes/polylineActionTypes'

function* getPolylineRoute(action: actionTypes.SetSelectedOrder) {
  try {
    yield put(actionCreators.getPolylineLoading())

    const { data }: IData = yield call(getRoutePolylineAxios, action.selectedOrder)

    if (data.code === 'Ok') {
      yield put(actionCreators.getPolylineSuccess(data))
    } else {
      yield put(
        actionCreators.getPolylineFailure({ status: true, message: 'Ошибка построения маршрута' })
      )
    }
  } catch (error) {
    yield put(
      actionCreators.getPolylineFailure({
        status: true,
        message: String(error) || 'Неизвестная ошибка',
      })
    )
  }
}

function* watchGetPolyline() {
  yield takeEvery(actionTypes.SET_SELECTED_ORDER, getPolylineRoute)
}

export default function* routePolylineSaga() {
  yield all([fork(watchGetPolyline)])
}
