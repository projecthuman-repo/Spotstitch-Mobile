import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TextInput from '../../components/TextInput'
import Header from '../../components/Header'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

export default function LoginOTPVerificationScreen({ navigation, route }) {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const userPhoneNumber = '000-000-0000' // route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header>Verify it's you.</Header>
      <View style={styles.phoneContainer}>
        <Text style={styles.messageText}>An authentication code has been sent to</Text>
        <View style={styles.row}>
          <Text style={styles.phoneText}>
            {'***-***-' + userPhoneNumber.slice(-4)}
          </Text>
          <Text style={styles.messageText}> and will expire after 5</Text>
        </View>
        <Text style={styles.messageText}> minutes.</Text>
      </View>
      <TextInput
        label="6-digit code"
        returnKeyType="done"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        error={false}
        maxLength={6}
        keyboardType="numeric"
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {console.log("Continue")}}
      >

      <Text style={styles.buttonText}>CONTINUE</Text>
      </Button>
      <View style={styles.row}>
        <Text style={styles.codeText}>Need another code? </Text>
        <TouchableOpacity onPress={() => {console.log("Send again")}}>
          <Text style={styles.link}>Send again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}