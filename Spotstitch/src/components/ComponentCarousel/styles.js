import { StyleSheet } from 'react-native'
import { theme } from '../../core/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray,
  },
  buttonText: {
    color: theme.colors.text,
  },
  viewContainer: {
    flex: 1,
    width: '100%',
  },
})
