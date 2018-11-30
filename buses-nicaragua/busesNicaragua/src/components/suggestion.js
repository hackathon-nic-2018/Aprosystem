import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    FlatList,
    StyleSheet,
} from 'react-native';

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
    sectionImage: {
        justifyContent: 'flex-end',
    },
    iconRight: {
        width: 32,
        height: 32,
    },
});

const SuggestionItem =  ({ item }) => (
    <TouchableOpacity
        onPress={() => onPress(item.key)}
    >
        <View style={styleItem.container}>
            <View style={styleItem.sectionInfo}>
                <Text style={styleItem.name}>
                    {item.name}
                </Text>
                <Text style={styleItem.description}>
                    {item.description}
                </Text>
            </View>
            <View style={styleItem.sectionImage}>
                <Image
                    style={styleItem.iconRight}
                    source={ require('../../assets/res/round_chevron_right_black_48.png') }
                />
            </View>
        </View>
    </TouchableOpacity>
);

const style = StyleSheet.create({
    container: {
        margin: 12,
        marginTop: 0,
    }
});

const Suggestion = ({ data }) => (

    <SafeAreaView>
        <View style={style.container}>
            <ScrollView>
                <FlatList
                    data={data} 
                    renderItem={({item}) => <SuggestionItem item={item} onPress={ (key) => navigation.navigate('lineasdata') } />}
                    ItemSeparatorComponent={() => <View style={{ height: 8, flex: 1, }}></View>}
                />
            </ScrollView>
        </View>
    </SafeAreaView>
);

export default Suggestion;