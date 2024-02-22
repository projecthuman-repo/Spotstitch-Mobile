import React from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Button} from 'react-native';
import SelectTopics from './FromRepo/SelectTopics';

function SelectTopic(props) {
    return (
        < View style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( '../assets/let.png' )}
                />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( '../assets/find.png')}
                />
            </View>
            <View style={ styles.detailtext}>
            <Image source={require( '../assets/select.png')}
                />
            </View>
            <SelectTopics/>

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
        height:'10%',     
    },
    detailtext:{   
        justifyContent: 'center',       
        height:'10%',     
    },
    layerlist:{
        margin:20

    }
})

export default SelectTopic;