import React, { Component } from 'react';
import {
    TouchableOpacity,
       View, 
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,

}
from 'react-native';


import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window')

class Index extends Component{

    constructor(){
        super()
        this.state={
            region:{
                latitude: null,
                longitude: null,
                latitudeDelta: null,
                longitudeDelta: null,
            }
        }
    }

    calcDelta(lat,lon,accuracy){
        const oneDegreeOfLongitudInMeters=111.32;
        const circunference =(40075/360)

        const latDelta= accuracy * (1/(Math.cos(lat)*circunference))
        const lonDelta=(accuracy/oneDegreeOfLongitudInMeters)

        this.setState({
            region:{
                latitude: lat,
                longitude:lon,
                latitudeDelta:latDelta,
                longitude:lonDelta,
            }
        })
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=> {
                const lat = position.coords.latitude
                const lon=position.coords.longitude
                const accuracy= position.coords.accuracy
                this.calcDelta(lat,lon,accuracy)

            }
        )
        
    }

    render(){
        return(
            <View style = {styles.container}>   
            {this.state.region.latitude ? 
                <MapView
                style = {styles.map}
                initialRegion= {this.state.region}
                />: null
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContetext: 'center',
        alignItem: 'center',
        backgroundColor: 'red'
    },
    map:{
        flex: 1,
        width: width
    }
})


export default Index
