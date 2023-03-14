import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function AddProfilePhoto() {
  const [image, setImage] = React.useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            console.log('Camera')
          }}
        >
          <MaterialCommunityIcons name="camera" size={27} color="#000" />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/empty-avatar.png')}
          style={styles.userAvatar}
        />
      </View>
    </View>
  )
}
