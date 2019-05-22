import React from 'react'
import { Dimensions, View } from 'react-native'

import ImageAvatar from '../Atoms/avatar'
import Icon from '../Atoms/icon'


function ImageCard(props) {
  const { uri, onPress } = props
  const { width, height } = Dimensions.get('window')

  return (
    <View style={{ width: width * .9 }} > 
      <View  style={styles.containerStyle}>
        <View style={styles.imageStyle} >
        <ImageAvatar uri={uri}  />
        </View>
        
        <View style={styles.iconStyle} >
        <Icon icon='add-circle' 
          onPress={onPress} />
        </View>
        
      </View>
      </View>
  )
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageStyle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle: {
    flex: 1
  }
}

export default ImageCard