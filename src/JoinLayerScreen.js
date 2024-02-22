import React from 'react';
import { StyleSheet, View ,Text, SafeAreaView , Platform , StatusBar, Image ,FlatList } from 'react-native';  
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Button from './Button';
import LayerCard from './LayerCard';
import { dummyData } from './dummyData';


function JoinLayerScreen() {
    return (
        < SafeAreaView style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( '../assets/sew.png' )}
                />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( '../assets/layer.png')}
                />
            </View>
            <View style={ styles.detailtext}>
                <Image source={require( '../assets/detail.png')}
                    />
            </View>           
            <LayerCard dummyData={ dummyData } />    
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
    layerlist:{
        // justifyContent: 'space-between'
        // height:'8%',     
        // margin:20
        // padding:20
    }
})

export default JoinLayerScreen;