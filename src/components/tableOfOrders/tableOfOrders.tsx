import { useState } from 'react'
import { Card, Table } from 'antd'
import { useDispatch } from 'react-redux'
import type { ColumnsType } from 'antd/es/table'

import { setPolyline } from '../../store/actionCreators/polylineActionCreators'
import { IOrder, FromToType } from '../../interface/order.interface'
import { OrderPosition } from '../orderPosition/orderPosition'
import useTypedSelector from '../../hooks/useTypedSelector'
import mockData from '../../mockData.json'
import styles from './table.module.sass'

const columns: ColumnsType<IOrder> = [
  {
    title: '№ Заявки',
    dataIndex: 'order',
    width: 10,
  },
  {
    title: 'Откуда',
    dataIndex: 'from',
    render: (i: FromToType) => <OrderPosition positionLatLng={i} />,
    width: 20,
  },
  {
    title: 'Куда',
    dataIndex: 'to',
    render: (i: FromToType) => <OrderPosition positionLatLng={i} />,
    width: 30,
  },
]

export const TableOfOrders = (): JSX.Element => {
  const isLoading = useTypedSelector((state) => state.polyline.isLoading)
  const [data] = useState(mockData.data as IOrder[])
  const dispatch = useDispatch()

  return (
    <Card title="Таблица заявок" className={styles.table}>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        rowSelection={{
          type: 'radio',
          onSelect: (record: IOrder): void => {
            dispatch(setPolyline(record))
          },
        }}
        rowKey={(record: IOrder): string | number => record.id}
      />
    </Card>
  )
}
