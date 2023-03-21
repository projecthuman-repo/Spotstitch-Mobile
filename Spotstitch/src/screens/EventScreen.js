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
  const { name, time, area, imageUrl } = route.params;

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
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Event</Text>
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
});

export default EventScreen;
