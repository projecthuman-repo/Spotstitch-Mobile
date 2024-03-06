import React from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Text,ArrowRightIcon, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
        <View style={ styles.layer} >            
            <TouchableOpacity
                style={styles.camera}
                onPress={() => { console.log('Camera') }}
            >
                <Image source={require( '../assets/cameraIcon.png')}/> 
                {/* <MaterialCommunityIcons name="camera-outline" size={27} color="#000" /> */}
            </TouchableOpacity>
        </View>
        <View  style={ styles.imagecontainer }>
            <TouchableOpacity
            style={styles.image}
            onPress={() => { console.log('Edit') }}
            >
            <Image source={require( '../assets/editIcon.png')}/> 
            {/* <MaterialCommunityIcons name="pencil" size={27} color="#000" /> */}
            </TouchableOpacity>
            <Image
            source={require( '../assets/avatar.png')}
            //   style={{ position:'absolute', top:'45%'}}
            //   style={styles.userAvatar}
            />
            <Text style={ styles.username}>John Doe</Text>
        </View>
        <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => console.log("goback") } >
                    <Image source={require( '../assets/back2.png')} onPress={() => navigation.goBack()} />    
                </TouchableOpacity>    
                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => console.log("Skip")} >
                        <Image source={require( '../assets/skipBtn.png')} />    
                    </TouchableOpacity >            
                    <TouchableOpacity onPress={() => console.log("Done")} >
                        <Image source={require( '../assets/nextBtn.png')} />    
                    </TouchableOpacity >    
                </View>
        </View>             
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,     
        alignItems : 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
    },
    layer:{
        height:'25%',
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
    camera: {
        // backgroundColor: '#C7C9CB',
        // backgroundColor: '#fff',
        position: 'absolute',
        top: '6%',
        right: '2%',
        padding: 2,
        // borderColor:'#000',
        // borderWidth:1,
        // borderRadius: 7,
        zIndex: 1,
      },
      image: {
        // backgroundColor: '#C7C9CB',
        position: 'absolute',
        top: '2%',
        right: '2%',
        // padding: 2,
        // borderRadius: 7,
        zIndex: 1,
      }, 
      imagecontainer:{
        position:'absolute',
        top: Platform.OS === 'android'? '60%':'50%', 
        zIndex:0
      },
      username: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop:'15%'
      },
      lastRow:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    }
})


export default AddBannerPhoto;