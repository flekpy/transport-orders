import axios from 'axios'
import { IOrder } from '../interface/order.interface'
import { IData } from '../interface/routePolylineResponse.interface'

export async function getRoutePolylineAxios(selectedOrder: IOrder): Promise<IData> {
  return await axios.get(
    `http://router.project-osrm.org/route/v1/driving/${selectedOrder.from[1]},${selectedOrder.from[0]};${selectedOrder.to[1]},${selectedOrder.to[0]}?geometries=geojson`
  )
}
