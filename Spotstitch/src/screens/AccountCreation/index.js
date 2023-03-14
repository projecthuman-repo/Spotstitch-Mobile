import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import ComponentCarousel from '../../components/ComponentCarousel'
import AuthenticationWrapper from '../../components/AuthenticationWrapper'
import { accountCreationComponentList } from './accountCreationComponentList'

export default function AccountCreationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ComponentCarousel>
        {accountCreationComponentList.map((component, index) => {
          return (
            <AuthenticationWrapper
              key={component.id}
              title={component.title}
              subtitle={component.subtitle}
              information={component.information}
              verificationText={component.verificationText}
            >
              {component.component()}
            </AuthenticationWrapper>
          )
        })}
      </ComponentCarousel>
    </SafeAreaView>
  )
}
