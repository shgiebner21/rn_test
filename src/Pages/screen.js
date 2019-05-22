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

  onIconPress = (e) => alert('Ability to update image is under construction')

  render() {
    const { name, phone, EMail, password, pin, checked } = this.state
    const uri = '../Assets/shg_avatar.jpeg'

    console.log('state is, ', this.state)

    return (
      <View>
        <HeaderCard />

        <ImageCard uri={require(uri)} icon='add-circle'
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
            <NativeButton label='Save' type='primary' />
          </View>
        </Form>

      </View>
    )
  }
}
