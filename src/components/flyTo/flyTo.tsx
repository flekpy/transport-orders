import { useMap } from 'react-leaflet'

import { FromToType } from '../../interface/order.interface'

interface IFlyToProps {
  from: FromToType
  to: FromToType
}

export const FlyTo = ({ from, to }: IFlyToProps): null => {
  useMap().flyToBounds([from, to], { maxZoom: 13 })

  return null
}
