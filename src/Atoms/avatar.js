import React from 'react'
import { Thumbnail } from 'native-base'


 function ImageAvatar(props) {
    const { uri } = props
    
    return <Thumbnail source={uri} style={styles.imageSize} />
  }

  const styles = {
    imageSize: {
      width: 120,
      height: 120,
      borderRadius: 60,
    }
  }


export default ImageAvatar