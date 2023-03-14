import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 7,
    backgroundColor: '#DFDFDF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
  },
  joinText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
})
