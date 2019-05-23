import React, {Component} from 'react'
import { View } from 'react-native'
import { Form } from 'native-base'

import HeaderCard from '../Molecules/headerCard'
import ImageCard from '../Molecules/imageCard'
import InputField from '../Molecules/inputField'
import RadioButton from '../Atoms/radioButton'
import NativeButton from '../Atoms/button'


export default class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: '',
      phone: '',
      EMail: '',
      password: '',
      pin: '',
      checked: false
    })
  }

  handleChange = name => e => {
    this.setState({[name]: e})

  }

  RadioButtonChange = (e) => {
    this.setState({ checked: !this.state.checked })
  }

  onCancelPress = (e) => {
    this.setState({ name: '', phone: '', EMail: '', password: '', pin: '', checked: false })
  }

  onSavePress = (e) => {
    e.preventDefault()
    console.log('JSON data looks like; ', JSON.stringify(this.state))

    fetch('http://projects.codeandtrust.com/api/user/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(resp => console.log('data is, ', resp))
    .catch(error => console.log('error is, ', error) )
  }

  onMenuPress = () => alert('This is going to be a very sweet sidebar navigation tool.  Trust me, it will be worth the wait.')

  onIconPress = (e) => alert('Ability to update image is under construction')

  render() {
    const { name, phone, EMail, password, pin, checked, openDrawer } = this.state
    const uri = '../Assets/shg_avatar.jpeg'

    return (
      <View>
        <HeaderCard onPress={this.onMenuPress} />

        <ImageCard uri={require(uri)} icon='add-circle' size='large'
          onPress={this.onIconPress} />

        <Form>
          <InputField label='Username' 
                      value={name}
                      placeholder='enter name'
                      onChangeText={this.handleChange('name')} />
          <InputField label='Phone' 
                      value={phone}
                      placeholder='enter phone nr'
                      onChangeText={this.handleChange('phone')} />
          <InputField label='E-Mail' 
                      value={EMail}
                      placeholder='enter e-mail'
                      onChangeText={this.handleChange('EMail')} />
          <InputField label='Password' 
                      value={password}
                      secure={true}
                      placeholder='enter password'
                      onChangeText={this.handleChange('password')} />
          <InputField label='PIN' 
                      value={pin}
                      placeholder='enter pin here'
                      onChangeText={this.handleChange('pin')} />
          <RadioButton checked={checked} onSelect={this.RadioButtonChange} />

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
            <NativeButton label='Cancel' type='transparent'
                onPress={this.onCancelPress} />
            <NativeButton label='Save' type='primary'
                onPress={this.onSavePress}  />
          </View>
        </Form>

      </View>
    )
  }
}
