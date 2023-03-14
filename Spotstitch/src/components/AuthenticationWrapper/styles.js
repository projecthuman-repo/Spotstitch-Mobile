import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyContainer: {
    height: 50,
  },
  halfEmptyContainer: {
    height: 25,
  },
  verificationContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'flex-end',
  },
  verificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verificationText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  information: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
})
