import React from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Text,ArrowRightIcon, ScrollView, Touchable, TouchableOpacity} from 'react-native';


function AddBannerPhoto(props) {
    return (
        < View style={ styles.container}>
        <View style={ styles.maintext  }>
            <Image source={require( '../assets/add.png' )}
            />
        </View>
        <View style={ styles.midtext}>
            <Image source={require( '../assets/personal.png')}
            />
        </View>
        <View style={ styles.temp} >
            {/* <Text> "WTF"</Text> */}
        </View>
        <TouchableOpacity style={{ position:'absolute', top:'45%'}}>
           
            <Image source={require( '../assets/avatar.png')}
            />
            <ScrollView 
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
            />
        </TouchableOpacity>
        
     
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,     
        alignItems : 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
        // backgroundColor:"tomato"
    },
    temp:{
        height:'20%',
        width:'100%',
        backgroundColor:"#D4EAC3"
    },

    maintext:{
        justifyContent:'center',
        height:'20%',      
    },
    midtext:{             
        height:'6%',     
    },
})


export default AddBannerPhoto;