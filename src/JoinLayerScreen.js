import React from 'react';
import { StyleSheet, View ,Pressable , SafeAreaView , Platform , StatusBar, Image ,TouchableOpacity } from 'react-native';  
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Button from './Button';
import LayerCard from './LayerCard';
import { dummyData } from './dummyData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function JoinLayerScreen() {
    return (
        < SafeAreaView style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( '../assets/sew.png' )} />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( '../assets/layer.png')} />
            </View>
            <View style={ styles.detailtext}>
                <Image source={require( '../assets/detail.png')} />
            </View>           
            <LayerCard dummyData={ dummyData } />  
            <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => console.log("goback") } >
                    <Image source={require( '../assets/back2.png')} onPress={() => navigation.goBack()} />    
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => console.log("Done")} >
                    <Image source={require( '../assets/doneBtn.png')} />    
                </TouchableOpacity >            
            </View>  
        </SafeAreaView>        
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
    detailtext:{          
        height:'8%',     
    },
    lastRow:{
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 200,
        bottom:'5%'
    }
})

export default JoinLayerScreen;