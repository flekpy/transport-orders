import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import './map.sass'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
})

export const Map = ({ children, ...props }: MapContainerProps): JSX.Element => {
  return (
    <div className="leaflet-container">
      <MapContainer {...props}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</div> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </div>
  )
}
