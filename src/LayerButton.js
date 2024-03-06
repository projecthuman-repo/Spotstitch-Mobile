import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function LayerButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={ ()=> console.log(title)}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.joinText}>Join</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderRadius: 7,
        borderColor:'#A5DC7Aff',  
        borderWidth:2.4,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 15,
        // // shadowColor: '#000',
        // // shadowOffset: {
        // //   width: 0,
        // //   height: 3,
        // // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        // elevation: 4,
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
