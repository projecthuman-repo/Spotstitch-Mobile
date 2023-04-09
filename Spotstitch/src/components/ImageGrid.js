import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native/lib/typescript/lib/src';

const TrendingPosts = [
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},
{
id: 1,
username: 'John Doe',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
type: 'personal',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
},

];

const ImageGrid = () => {
const navigation = useNavigation();
const handleSeeMore = () => {
    navigation.navigate('TrendingScreen', { posts: TrendingPosts });
};

return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <View style={styles.imageContainer}>
                <View style={styles.row}>
                    {TrendingPosts.slice(0,3).map(post => (
                        <Image key={post.id} source={{ uri: post.image }} style={styles.image} />
                    ))}
                </View>
                <View style={styles.row}>
                    {TrendingPosts.slice(3,6).map(post => (
                        <Image key={post.id} source={{ uri: post.image }} style={styles.image} />
                    ))}
                </View>
                <View style={styles.row}>
                    {TrendingPosts.slice(6,9).map(post => (
                        <Image key={post.id} source={{ uri: post.image }} style={styles.image} />
                    ))}
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMore}>
            <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
container: {
marginBottom: 20,
},
imageContainer: {
backgroundColor: '#fff',
borderRadius: 5,
padding: 5,
shadowColor: '#000',
shadowOpacity: 0.5,
shadowRadius: 3,
elevation: 6,
margin: 5,
},
row: {
flexDirection: 'row',
justifyContent: 'space-between',
},
image: {
width: 150,
height: 150,
margin: 5,
},
seeMoreButton: {
alignSelf: 'center',
marginTop: 10,
padding: 10,
backgroundColor: '#ccc',
borderRadius: 5,
},
seeMoreText: {
color: '#fff',
fontWeight: 'bold',
textAlign: 'center',
},
});

export default ImageGrid;



