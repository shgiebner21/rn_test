import React from 'react'
import { View } from 'react-native'
import { Thumbnail } from 'native-base'


 function ImageAvatar(props) {
    const { uri, size } = props

    const renderImage = (size === 'large')
      ? <Thumbnail source={uri} style={styles.largeImage} />
      : <Thumbnail source={uri} style={styles.smallImage} />    


    return (
      <View>
        {renderImage}
      </View>
    )
  }

  const styles = {
    largeImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    smallImage: {
      width: 60,
      height: 60,
      borderRadius: 30
    }
  }


export default ImageAvatar