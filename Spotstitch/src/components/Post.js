import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native/lib/typescript/lib/src';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_PROFILE_PIC ='../../assets/profile.jpg';

const Post = ({ username, text, image, profilePic }) => {

const navigation = useNavigation();

const onPressLike = () => {
console.log('Like button pressed');
}

const onPressComment = () => {
console.log('Comment button pressed');
}

const onPressShare = () => {
console.log('Share button pressed');
}

const onPressPost = () => {
navigation.navigate('PostScreen', { username, text, image, profilePic });
}

return (
<TouchableOpacity onPress={onPressPost}>
<View style={styles.container}>
<View style={styles.header}>
<Image source={{ uri: profilePic || DEFAULT_PROFILE_PIC }} style={styles.profilePic} />
<Text style={styles.username}>{username}</Text>
</View>
{image && (
<>
<Text style={styles.caption}>{text}</Text>
<Image source={{ uri: image }} style={styles.image} />
</>
)}
{!image && <Text style={styles.text}>{text}</Text>}
<View style={styles.footer}>
<TouchableOpacity style={styles.iconContainer} onPress={onPressLike}>
<Ionicons name="heart-outline" size={24} color="#333" />
<Text style={styles.iconText}>Like</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.iconContainer} onPress={onPressComment}>
<Feather name="message-circle" size={24} color="#333" />
<Text style={styles.iconText}>Comment</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.iconContainer} onPress={onPressShare}>
<AntDesign name="sharealt" size={24} color="#333" />
<Text style={styles.iconText}>Share</Text>
</TouchableOpacity>
</View>
<View style={styles.separator} />
</View>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
container: {
marginHorizontal: 16,
marginVertical: 8,
},
header: {
flexDirection: 'row',
alignItems: 'center',
},
profilePic: {
height: 40,
width: 40,
borderRadius: 20,
marginRight: 8,
borderWidth: 1,
borderColor: '#ccc',
},
username: {
fontWeight: 'bold',
fontSize: 16,
color: '#333',
},
caption: {
fontSize: 16,
color: '#333',
marginBottom: 8,
},
image: {
height: 300,
width: '100%',
borderRadius: 8,
},
footer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 8,
},
iconContainer: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 16,
},
iconText: {
marginLeft: 8,
fontSize: 16,
color: '#333',
},
text: {
fontSize: 16,
color: '#333',
},
separator: {
borderBottomColor: '#ccc',
borderBottomWidth: StyleSheet.hairlineWidth,
marginTop: 8,
},
});

export default Post;