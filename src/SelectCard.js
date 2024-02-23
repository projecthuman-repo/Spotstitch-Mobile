import React from 'react'
import {StyleSheet, View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { selectCarddummyData } from './selectCarddummyData'

function SelectCard() {
  const [search, setSearch] = React.useState('')
  const [topics, setTopics] = React.useState(selectCarddummyData)

  const handleOnPress = (id) => {
    const newTopics = topics.map((topic) => {
      if (topic.id === id) {
        return { ...topic, selected: !topic.selected }
      }
      return topic
    })
    setTopics(newTopics)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for topics"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setSearch(text)}
          value={search}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          cursorColor="#000000"
          selectionColor="#000000"
        />
        <MaterialCommunityIcons name="magnify" size={24} color="black" />
      </View>
      <FlatList
        style={{ flexGrow:3}}
        data={topics}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={item.selected ? styles.selected : styles.itemContainer}
            onPress={() => handleOnPress(item.id)}
          >
            {item.selected && (
              <MaterialCommunityIcons
                name="check"
                size={20}
                color="black"
                style={styles.icon}
              />
            )}
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
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
        borderColor:'#A5DC7Aff',  
        borderWidth:2.4,
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
        backgroundColor: '#A5DC7A',
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

export default SelectCard



