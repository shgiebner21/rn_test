import React from 'react'
import { Item, Label, Input } from 'native-base'


function InputField(props) {
  const { label, value, placeholder, onChangeText } = props

  return (
    <Item inlineLabel>
      <Label style={{ color: 'white' }} >{label}</Label>
      <Input placeholder={placeholder} onChangeText={onChangeText}
             value={value} style={{ color: 'white' }} />
    </Item>
  )
}

export default InputField