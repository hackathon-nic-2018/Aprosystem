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

import LinesScreen from './lineas';

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

const LineasdatailItem =  ({ item,  }) => (

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

const lineasdetail  = ({ data }) => (
    <SafeAreaView>
        <View style={style.container}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={({item}) => <LineasdatailItem item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 8, flex: 1, }}></View>}
                />
            </ScrollView>
        </View>
    </SafeAreaView>
);

export default lineasdetail;