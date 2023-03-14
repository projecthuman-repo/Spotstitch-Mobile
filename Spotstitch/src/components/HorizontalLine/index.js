import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function HorizontalLine({ text }) {
  return (
    <View style={styles.breakLine}>
      <View style={styles.line} />
      {text && <Text style={styles.or}>{text}</Text>}
      <View style={styles.line} />
    </View>
  )
}
