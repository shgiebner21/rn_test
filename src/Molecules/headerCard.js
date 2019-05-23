import React from 'react'
import { Icon as RNIcon } from 'react-native-elements'
import { Header, Left, Right, Button, Icon } from 'native-base'


function HeaderCard(props) {

    const { onPress } = props

    return (
 
        <Header style={styles.container} >
          <Left>
            <Button transparent onPress={onPress} >
              <Icon name='menu' style={{ color: 'white' }} />
            </Button>
          </Left>

          <Right>
            <Button transparent onPress={onPress} >
              <RNIcon name='more-vert' color='white' />
            </Button>
          </Right>
        </Header>

    )
}

const styles = {
  container: {
    backgroundColor: '#2e6eb6',
    marginBottom: 30,
  }
}

export default HeaderCard