export interface ILegs {
  distance: number
  duration: number
  steps: []
  summary: string
  weight: number
}

export interface IRoutes {
  distance: number
  duration: number
  geometry: {
    coordinates: [number, number][]
    type: string
  }
  legs: ILegs[]
  weight: number
  weight_name: string
}

export interface IWaypoints {
  distance: number
  hint: string
  location: [number, number]
  name: string
}

export interface IRoutePolylineResponse {
  code: string
  routes: IRoutes[]
  waypoints: IWaypoints[]
}

export interface IData {
  data: IRoutePolylineResponse
}
