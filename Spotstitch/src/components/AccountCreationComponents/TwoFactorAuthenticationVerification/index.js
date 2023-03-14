import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import TextInput from '../../TextInput'

export default function TwoFactorAuthenticationVerification() {
  const [code, setCode] = React.useState('')

  return (
    <View style={styles.container}>
      <TextInput
        label="6-digit code"
        returnKeyType="next"
        value={code}
        onChangeText={(text) => setCode(text)}
        autoCapitalize="none"
        keyboardType="phone-pad"
      />
    </View>
  )
}
