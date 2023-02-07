import { useEffect } from 'react'
import { message } from 'antd'

import useTypedSelector from './useTypedSelector'

const useErrorMessage = (): void => {
  const { status, message: messages } = useTypedSelector((state) => state.polyline.error)

  const errorMessage = (err: string) => {
    message.open({
      type: 'error',
      content: err,
    })
  }

  useEffect(() => {
    status && errorMessage(messages)
  }, [status, messages])
}

export default useErrorMessage
