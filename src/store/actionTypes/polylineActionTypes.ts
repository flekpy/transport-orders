import { IRoutePolylineResponse } from '../../interface/routePolylineResponse.interface'
import { IOrder } from '../../interface/order.interface'
import { IError } from '../../interface/error.interface'

export const SET_SELECTED_ORDER = 'SET_SELECTED_ORDER'
export interface SetSelectedOrder {
  type: typeof SET_SELECTED_ORDER
  selectedOrder: IOrder
}

export const GET_POLYLINE_LOADING = 'GET_POLYLINE_LOADING'
export interface GetPolylineLoadingAction {
  type: typeof GET_POLYLINE_LOADING
}

export const GET_POLYLINE_SUCCESS = 'GET_POLYLINE_SUCCESS'
export interface GetPolylineSuccesAction {
  type: typeof GET_POLYLINE_SUCCESS
  payload: IRoutePolylineResponse
}

export const GET_POLYLINE_FAILURE = 'GET_POLYLINE_FAILURE'
export interface GetPolylineFailureAction {
  type: typeof GET_POLYLINE_FAILURE
  error: IError
}

export type PolylineAction =
  | GetPolylineLoadingAction
  | GetPolylineSuccesAction
  | GetPolylineFailureAction
  | SetSelectedOrder
