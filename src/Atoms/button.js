import React from 'react'
import { View, Button, Text } from 'native-base'


function NativeButton(props) {
  const { label, type, onPress } = props

  const buttonType = (type === 'transparent') 
    ? <Button transparent onPress={onPress} ><Text style={{ color: 'white' }} > {label} </Text></Button>
    : <Button primary onPress={onPress}  ><Text> {label} </Text></Button>
  

  return (
    <View>{buttonType}</View>
    
  )
}

export default NativeButton