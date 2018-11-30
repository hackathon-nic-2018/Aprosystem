import React from 'react';
import {
    DrawerItems,
    SafeAreaView,
} from 'react-navigation';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View
                style={styles.header}
            >
                <Image
                    source={require('./../image/mierda.png')}
                    style={styles.headerImage}
                />
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    header: {
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#136d8b',
        marginBottom: 1,
    },
    headerImage: {
        width: 220,
        height: 100,
    },
});

export default CustomDrawerContentComponent;