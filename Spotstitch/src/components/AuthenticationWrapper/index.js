import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { theme } from '../../core/theme'

export default function AuthenticationWrapper({
  verificationText,
  title,
  subtitle,
  information,
  children,
}) {
  return (
    <View style={styles.container}>
      {verificationText ? (
        <View style={styles.verificationContainer}>
          <View style={styles.verificationContent}>
            <MaterialCommunityIcons
              name="check-circle"
              size={20}
              color={theme.colors.verificationGreen}
            />
            <Text style={styles.verificationText}>{verificationText}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : (
        <View style={styles.halfEmptyContainer} />
      )}
      {information ? (
        <Text style={styles.information}>{information}</Text>
      ) : (
        <View style={styles.halfEmptyContainer} />
      )}
      {children}
    </View>
  )
}
