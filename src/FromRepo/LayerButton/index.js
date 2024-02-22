import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default function LayerButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.joinText}>Join</Text>
    </TouchableOpacity>
  )
}
