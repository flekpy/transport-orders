import { Popup, PopupProps } from 'react-leaflet'

export const PopupMap = ({ children, ...props }: PopupProps): JSX.Element => {
  return <Popup {...props}>{children}</Popup>
}
