import React from 'react';

import {

    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
} from 'react-native'

const styleItem = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        marginRight: 8
    },
    name: {
        fontSize: 12,
    },
})

const Suggestion2Item = (item, onItemPress) => (
    <TouchableOpacity
        onPress={() => {
            onItemPress(item.key);
        }}
    >
        <View style = {styleItem.container}>
            <Text style = {styleItem.name}>
                {item.name}
            </Text>
        </View>
    </TouchableOpacity>
);

const style = StyleSheet.create({
    container: {
     margin: 12,
    }
});

const Suggestion2 = ({ data, onItemPress }) =>(
    
    <ScrollView style = {style.container}>
        <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => Suggestion2Item(item, onItemPress)}
        />
    </ScrollView>
    
);

export default Suggestion2;