import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import SocialMediaButton from '../../SocialMediaButton'
import { theme } from '../../../core/theme'

export default function ConnectSocials() {
  return (
    <View style={styles.container}>
      <SocialMediaButton
        title="Facebook"
        iconColor="#ffffff"
        iconName="facebook"
        iconSize={25}
        onPress={() => {
          console.log('Facebook')
        }}
      />
      <SocialMediaButton
        title="Twitter"
        iconColor="#ffffff"
        iconName="twitter"
        iconSize={25}
        onPress={() => {
          console.log('Twitter')
        }}
      />
      <SocialMediaButton
        title="Instagram"
        iconColor="#ffffff"
        iconName="instagram"
        iconSize={25}
        onPress={() => {
          console.log('Instagram')
        }}
      />
      <SocialMediaButton
        title="Google"
        iconColor="#ffffff"
        iconName="google"
        iconSize={25}
        onPress={() => {
          console.log('Google')
        }}
      />
    </View>
  )
}
