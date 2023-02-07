import { Polyline, PolylineProps } from 'react-leaflet'

export const PolylineMap = ({ children, ...props }: PolylineProps): JSX.Element => {
  return <Polyline {...props}>{children}</Polyline>
}
