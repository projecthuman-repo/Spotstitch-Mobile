import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import LayerButton from '../../LayerButton'
import { dummyData } from './dummyData'

export default function JoinLayers() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <LayerButton title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
