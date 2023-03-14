import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  input: {
    height: 50,
    flex: 1,
    paddingRight: 20,
  },
  itemContainer: {
    backgroundColor: '#D4D4D4',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#000000',
  },
  icon: {
    marginHorizontal: 10,
  },
  selected: {
    backgroundColor: '#B3B3B3',
    paddingRight: 16,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
