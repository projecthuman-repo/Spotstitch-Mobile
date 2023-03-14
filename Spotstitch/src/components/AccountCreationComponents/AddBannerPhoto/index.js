import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function AddBannerPhoto() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.camera}
        onPress={() => {
          console.log('Camera')
        }}
      >
        <MaterialCommunityIcons name="camera" size={27} color="#000" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            console.log('Edit')
          }}
        >
          <MaterialCommunityIcons name="pencil" size={27} color="#000" />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/empty-avatar.png')}
          style={styles.userAvatar}
        />
        <Text style={styles.username}>John Doe</Text>
      </View>
    </View>
  )
}
