import React from 'react'
import { Header, Left, Button, Icon } from 'native-base'


function HeaderCard(props) {

    const { onPress } = props

    return (
 
        <Header style={styles.container} >
          <Left>
            <Button transparent onPress={onPress} >
              <Icon name='menu' style={{ color: 'white' }} />
            </Button>
          </Left>
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