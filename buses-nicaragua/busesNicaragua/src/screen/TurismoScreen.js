import React, { Component } from 'react';
import {
    View, 
    StyleSheet,
    Text,
    TouchableOpacity,
    Button
}
from 'react-native';
import { withNavigation } from 'react-navigation';

class TurismoScreen extends Component{

    onClickHotelBusquedaScreen = () => {
        this.props.navigation.navigate('Hotel');
    };

    
    onClickCentosBusquedaScreen = () => {
        this.props.navigation.navigate('Centros');
    };

    render(){
        return(
            <View>
            <TouchableOpacity style={styles.button} onPress={this.onClickHotelBusquedaScreen}>
                <Text>Hoteles</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={this.onClickCentosBusquedaScreen}>
                <Text>Centros Recreativos</Text>
            </TouchableOpacity>
        </View>

        )
    }
                    
}


const styles = StyleSheet.create({
    Desarrolladores: {
        color: '000000',
        fontWeight: 'bold',
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,
      },
      button:{
        fontSize: 14,
        marginTop: 10,
        marginleft: 5,
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
      button1:{
        fontSize: 14,
        marginTop: 10,
        marginleft: 5,
        backgroundColor: '#DDDDDD',
        padding: 10,
      }
  });

export default TurismoScreen;