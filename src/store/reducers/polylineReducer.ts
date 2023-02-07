import { IRoutePolylineResponse } from '../../interface/routePolylineResponse.interface'
import * as actions from '../actionTypes/polylineActionTypes'
import { IOrder } from '../../interface/order.interface'
import { IError } from '../../interface/error.interface'

export interface IInitState {
  routePolyline: IRoutePolylineResponse
  selectedOrder: IOrder | undefined
  isLoading: boolean
  error: IError
}

const initialState: IInitState = {
  selectedOrder: undefined,
  isLoading: false,
  error: {
    status: false,
    message: '',
  },
  routePolyline: {
    code: '',
    routes: [],
    waypoints: [],
  },
}

export default function polylineReducer(
  state: IInitState = initialState,
  action: actions.PolylineAction
): IInitState {
  switch (action.type) {
    case actions.SET_SELECTED_ORDER: {
      const newState = { ...state }
      newState.selectedOrder = action.selectedOrder
      newState.error = { status: false, message: '' }
      return newState
    }

    case actions.GET_POLYLINE_LOADING: {
      const newState = { ...state }
      newState.isLoading = true
      newState.error = { status: false, message: '' }
      return newState
    }

    case actions.GET_POLYLINE_SUCCESS: {
      const newState = { ...state }
      newState.isLoading = false
      newState.error = { status: false, message: '' }
      action.payload.waypoints.map((i) => i.location.reverse())
      newState.routePolyline = { ...action.payload }
      return newState
    }

    case actions.GET_POLYLINE_FAILURE: {
      const newState = { ...state }
      newState.error = { status: true, message: action.error.message }
      newState.isLoading = false
      return newState
    }

    default:
      return state
  }
}
