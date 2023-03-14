import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function EmailConfirmation() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Didn't receive an email? </Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>Send again.</Text>
      </TouchableOpacity>
    </View>
  )
}
