import React from 'react'
import { Icon as NewIcon} from 'native-base'

function Icon(props) {
  const { icon, onPress } = props

  return <NewIcon name={icon} onPress={onPress} />
}

export default Icon