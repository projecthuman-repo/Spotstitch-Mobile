import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back to Events</Text>
      </TouchableOpacity>
    );
  };

const EventScreen = ({ route }) => {
  const { name, time, area, imageUrl, description } = route.params;

  return (
    <View style={styles.container}>
      <BackButton />
      <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.area}>{area}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description:</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy/View Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 200,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    detailsContainer: {
      flex: 1,
      marginTop: -50,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#fff',
      padding: 20,
    },
    details: {
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    time: {
      fontSize: 16,
      color: '#888',
    },
    area: {
      fontSize: 16,
      color: '#888',
    },
    descriptionContainer: {
      marginTop: 20,
    },
    descriptionLabel: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
    },
    button: {
      marginTop: 20,
      backgroundColor: '#FF5733',
      borderRadius: 10,
      paddingVertical: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    backButton: {
      position: 'absolute',
      top: 50,
      left: 20,
      zIndex: 1,
    },
    backButtonText: {
      color: '#fff',
      fontSize: 18,
    },
  });
  
  export default EventScreen;