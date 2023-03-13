import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import Icon from '../components/Icon'
import { socialIconList } from '../components/Icon/socialIconList'
import HorizontalLine from '../components/HorizontalLine'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome to Spotstitch!</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        style={styles.signInButton}
        mode="contained"
        onPress={onLoginPressed}
      >
        <Text style={styles.signInText}>Sign in</Text>
      </Button>
      <HorizontalLine text="Or sign in with social media" />
      <View style={[styles.row, styles.icons]}>
        {socialIconList.map((item) => {
          return (
            <Icon
              key={item.name}
              name={item.name}
              containerStyle={styles.iconContainer}
              onPress={item.onPress}
            />
          )
        })}
      </View>
      <View
        style={[
          styles.row,
          {
            marginTop: 20,
          },
        ]}
      >
        <Text style={styles.signUpText}>No account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  icons: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.link,
  },
  iconContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  signInButton: {
    marginTop: 20,
    width: '40%',
    backgroundColor: theme.colors.gray,
  },
  signInText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  signUpText: {
    fontWeight: 'bold',
  },
})
