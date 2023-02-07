import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'

import {
  Map,
  FlyTo,
  PopupMap,
  MarkerMap,
  PolylineMap,
  TableOfOrders,
  OrderPosition,
} from './components'
import { useTypedSelector, useErrorMessage } from './hooks'
import './app.sass'

type PolylineType = [number, number][]
const latLngMoscow: [number, number] = [55.7558, 37.6173]
const getPolylineData = (routePolyline: PolylineType): PolylineType =>
  routePolyline.map((i) => [i[1], i[0]])

function App(): JSX.Element {
  const { waypoints, routes } = useTypedSelector((state) => state.polyline.routePolyline)
  const [polyline, setPolyline] = useState<PolylineType>([[0, 0]])
  useErrorMessage()

  useEffect(() => {
    !!routes.length && setPolyline(getPolylineData(routes[0].geometry.coordinates))
  }, [routes])

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={8}>
        <TableOfOrders />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={14} xxl={16} className="col-container-flex">
        <Map center={latLngMoscow} zoom={11}>
          {!!waypoints.length && (
            <>
              <PolylineMap positions={polyline} color="red" />
              <FlyTo from={waypoints[0].location} to={waypoints[1].location} />

              {waypoints.map((i, index) => (
                <MarkerMap key={i.distance} position={i.location}>
                  <PopupMap>
                    <p className="p-bold">{index === 0 ? 'Откуда' : 'Куда'}</p>
                    <OrderPosition positionLatLng={i.location} />
                  </PopupMap>
                </MarkerMap>
              ))}
            </>
          )}
        </Map>
      </Col>
    </Row>
  )
}

export default App
