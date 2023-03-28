import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Post from '../components/Post';
import Event from '../components/Event';
import ImageGrid from '../components/ImageGrid';
import Categories from '../components/Categories';

const Tab = createMaterialTopTabNavigator();

const posts = [
  {
    id: 1,
    username: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
  },
  {
    id: 3,
    username: 'John Doe',
    text: 'Vestibulum vel sapien vel velit facilisis aliquam.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
  },
];

const events = [
  {
    id: 2,
    name: 'Event 1',
    time: '2:00 PM',
    area: 'Location 1',
    image: 'https://www.example.com/image1.jpg',
    description: 'This is the description of Event1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue'
  },
  {
    id: 4,
    name: 'Event 2',
    time: '3:00 PM',
    area: 'Location 2',
    image: 'https://www.example.com/image2.jpg',
    description: 'This is the description of Event2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue'

  },
];

const MyPostsScreen = () => (
  <View style={styles.container}>
    <Categories />
    <ImageGrid />
    {posts.map((post) => (
      <Post key={post.id} username={post.username} text={post.text} image={post.image} />
    ))}
  </View>
);

const EventScreen = () => (
  <View style={styles.container}>
    {events.map((event) => (
      <Event key={event.id} name={event.name} time={event.time} area={event.area} imageUrl={event.image} description={event.description}/>
    ))}
  </View>
);

const Dashboard = () => (
  <Tab.Navigator>
    <Tab.Screen name="Personal" component={MyPostsScreen} />
    <Tab.Screen name="Events" component={EventScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
