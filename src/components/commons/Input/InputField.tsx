import { Input, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

interface InputFieldProps {
  label?: string
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label } = props
  return (
    <>
      <div>
        <Text>{label}</Text>
        <Input size={'large'} />
      </div>
    </>
  )
}

export default InputField
