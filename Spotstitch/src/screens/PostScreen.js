import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native/lib/typescript/lib/src';



const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={styles.backButtonText}>← Back to feed</Text>
    </TouchableOpacity>
  );
};

const PostScreen = ({ route }) => {
  const { username, text, image, profilePic } = route.params;
  const DEFAULT_PROFILE_PIC = '../../assets/profile.jpg';
  const [comment, setComment] = useState('');

  const onPressLike = () => {
    console.log('Like button pressed');
  }

  const onPressComment = () => {
    console.log('Comment button pressed');
  }

  const onPressShare = () => {
    console.log('Share button pressed');
  }

  const onSubmitComment = () => {
    console.log(`Submitted comment: ${comment}`);
    setComment('');
  }

  return (
    <View style={styles.container}>
      <BackButton />
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
      <View style={styles.commentSection}>
        <Text style={styles.commentTitle}>Comments</Text>
        <View style={styles.commentInputContainer}>
          <Image source={{ uri: profilePic || DEFAULT_PROFILE_PIC }} style={styles.commentProfilePic} />
          <TextInput style={styles.commentInput} placeholder="Add a comment..." />
        </View>
        {/* Render comments here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
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
    paddingHorizontal: 8,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
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
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    },
    input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    fontSize: 16,
    color: '#333',
    },
    postButton: {
    backgroundColor: '#1e90ff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    },
    postButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    },
    });
    
    export default PostScreen;
