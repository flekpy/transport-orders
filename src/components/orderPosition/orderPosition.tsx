interface IOrderProps {
  positionLatLng: [number, number]
}
export const OrderPosition = ({ positionLatLng }: IOrderProps): JSX.Element => {
  return (
    <div>
      <p>Широта: {positionLatLng[0]}</p>
      <p>Долгота: {positionLatLng[1]}</p>
    </div>
  )
}
