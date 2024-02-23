import React from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Button, TouchableOpacity} from 'react-native';
// import SelectTopics from './FromRepo/SelectTopics';
import SelectCard from './SelectCard';

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
            <SelectCard/>
            <View style={ styles.lastRow }
            >
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
        height:'5%',     
    },
    lastRow:{
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    }
})

export default SelectTopic;