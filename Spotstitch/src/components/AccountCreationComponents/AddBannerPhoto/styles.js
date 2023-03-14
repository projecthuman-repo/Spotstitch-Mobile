import { StyleSheet } from 'react-native'
import { theme } from '../../../core/theme'

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.lightBlue,
    minHeight: 170,
    justifyContent: 'center',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  imageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '-60%',
  },
  image: {
    backgroundColor: '#C7C9CB',
    position: 'absolute',
    top: 5,
    right: 10,
    padding: 2,
    borderRadius: 7,
    zIndex: 1,
  },
  camera: {
    backgroundColor: '#C7C9CB',
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 2,
    borderRadius: 7,
    zIndex: 1,
  },
  userAvatar: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  username: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
