import React from 'react'
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { dummyData } from './dummyData'

export default function SelectTopics() {
  const [search, setSearch] = React.useState('')
  const [topics, setTopics] = React.useState(dummyData)

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
