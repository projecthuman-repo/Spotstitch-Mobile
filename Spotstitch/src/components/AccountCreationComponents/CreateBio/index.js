import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import TextInput from '../../TextInput'

export default function CreateBio() {
  const [bio, setBio] = React.useState('')
  const [location, setLocation] = React.useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.bio}
        label="Add your bio"
        returnKeyType="next"
        value={bio}
        onChangeText={(text) => setBio(text)}
        autoCapitalize="none"
        multiline
      />
      <TextInput
        label="Location"
        returnKeyType="next"
        value={location}
        onChangeText={(text) => setLocation(text)}
        autoCapitalize="none"
      />
    </View>
  )
}
