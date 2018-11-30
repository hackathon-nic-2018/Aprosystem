import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    FlatList,
    StyleSheet,
} from 'react-native';

import Suggestion from './suggestion';

const styleItem = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    sectionInfo: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    name: {
        fontSize: 18,
    },
    description: {
        fontSize: 12,
    },

});

const SuggestiondatailItem =  ({ item,  }) => (

    <View style={styleItem.container}>
        <View style={styleItem.sectionInfo}>
            <Text style={styleItem.name}>
                {item.name}
            </Text>
            <Text style={styleItem.description}>
                {item.description}
            </Text>
        </View>
       
    </View>

);

const style = StyleSheet.create({
    container: {
        margin: 12,
    }
});

const SuggestionDatailScreen  = ({ data }) => (
    <SafeAreaView>
        <View style={style.container}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={({item}) => <SuggestiondatailItem item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 8, flex: 1, }}></View>}
                />
            </ScrollView>
        </View>
    </SafeAreaView>
);

export default SuggestionDatailScreen;