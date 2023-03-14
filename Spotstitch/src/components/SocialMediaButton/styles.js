import { StyleSheet } from 'react-native'
import { theme } from '../../core/theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: theme.colors.darkGray,
    borderRadius: 7,
    width: '80%',
    marginBottom: 15,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.darkGray,
    padding: 5,
    borderRadius: 5,
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})
