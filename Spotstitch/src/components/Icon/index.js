import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

const Icon = ({ name, size, color, onPress, containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color || '#90C766',
            borderRadius: 25,
          },
          containerStyle,
        ]}
      >
        <MaterialCommunityIcons
          name={name}
          size={size || 27}
          color={color || '#fff'}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Icon