import { StyleSheet } from 'react-native'
import { theme } from '../../../core/theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.link,
  },
})
