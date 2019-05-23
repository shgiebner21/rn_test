import React from 'react'
import { Icon as RNIcon } from 'react-native-elements'

function Icon(props) {
  const { icon, onPress } = props

  return <RNIcon name={icon} color='white' onPress={onPress} />
}

export default Icon