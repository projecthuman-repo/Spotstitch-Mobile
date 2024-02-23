import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
// import LayerButton from './FromRepo/LayerButton';
import LayerButton from './LayerButton';

function LayerCard({dummyData}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={ dummyData}
                renderItem={({ item }) => <LayerButton title={item.title} />}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '75%',
      },
})

export default LayerCard;