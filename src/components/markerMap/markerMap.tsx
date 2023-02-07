import { Marker, MarkerProps } from 'react-leaflet'

export const MarkerMap = ({ children, ...props }: MarkerProps): JSX.Element => {
  return <Marker {...props}>{children}</Marker>
}
