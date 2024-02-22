import React from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Button} from 'react-native';


function AddProfilePhoto(props) {
    return (       
        < View style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( '../assets/addPhoto.png' )}
                />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( '../assets/show.png')}
                />
            </View>        
            <View style>
                <Image source={require( '../assets/empty-avatar.png')}
                />
            </View>        
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,     
        alignItems : 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%'
    },
    maintext:{
        justifyContent:'center',
        height:'20%',      
    },
    midtext:{             
        height:'6%',     
    },
})

export default AddProfilePhoto;