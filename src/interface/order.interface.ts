export type FromToType = [number, number]

export interface IOrder {
  id: React.Key
  order: string
  from: FromToType
  to: FromToType
}
