import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import TextInput from '../../TextInput'

export default function TwoFactorAuthentication() {
  const [phoneNumber, setPhoneNumber] = React.useState('')

  return (
    <View style={styles.container}>
      <TextInput
        label="Phone number"
        returnKeyType="next"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        autoCapitalize="none"
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />
    </View>
  )
}
