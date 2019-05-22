import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderIconExample extends Component {
  render() {
    return (
 
        <Header style={styles.container} >
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>

          <Right>
{/*              <Button transparent>
              <Icon name='menu' />
            </Button>
*/}
          </Right>
        </Header>

    );
  }
}

const styles = {
  container: {
    backgroundColor: '#2e6eb6',
    marginBottom: 30,
  }
}