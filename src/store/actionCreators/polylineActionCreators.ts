import { IRoutePolylineResponse } from '../../interface/routePolylineResponse.interface'
import * as actions from '../actionTypes/polylineActionTypes'
import { IOrder } from '../../interface/order.interface'
import { IError } from '../../interface/error.interface'

export const setPolyline = (selectedOrder: IOrder): actions.SetSelectedOrder => ({
  type: actions.SET_SELECTED_ORDER,
  selectedOrder,
})

export const getPolylineLoading = (): actions.GetPolylineLoadingAction => ({
  type: actions.GET_POLYLINE_LOADING,
})

export const getPolylineSuccess = (
  payload: IRoutePolylineResponse
): actions.GetPolylineSuccesAction => ({
  type: actions.GET_POLYLINE_SUCCESS,
  payload,
})

export const getPolylineFailure = (error: IError): actions.GetPolylineFailureAction => ({
  type: actions.GET_POLYLINE_FAILURE,
  error,
})
