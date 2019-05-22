import React from 'react'

import { RadioButton as Radio } from 'react-native-material-ui'


function RadioButton(props) {
  const { checked, onSelect } = props
  const label = checked ? "Disable Pairing" : "Enable Pairing"

  return <Radio label={label} value='Value'
                checked={checked} onSelect={onSelect} />
}

export default RadioButton