import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

const NearByStops = ({ state, location }) => {
    return (
        <View>
            <MapView
                style={styles.mapContainer}
                initialRegion={{
                    latitude: 12.1062900,
                    longitude: -85.3645200,
                    latitudeDelta: 0.0055,
                    longitudeDelta: 0.0055,
                }}
            >
                {
                    state === 2 ? <Marker coordinate={ location } title={'Yo'} /> : null
                }
                <Marker
                    coordinate={{ latitude: 12.1062900, longitude: -85.3645200, }}
                    title={'Yo'}
                />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    mapContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        minHeight: '100%',
        minWidth: '100%',
    },
});

export default NearByStops;