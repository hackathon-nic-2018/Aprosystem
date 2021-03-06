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

class HotelScreeen extends Component{

    onClickHotelAriesBusquedaScreen = () => {
        this.props.navigation.navigate('HotelAries');
    };


    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={this.onClickHotelAriesBusquedaScreen}>
                    <Text>Hotel 2 Aries</Text>
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
        marginTop: 5,
        marginleft: 5,
        backgroundColor: '#DDDDDD',
        padding: 10,
      }
  });

export default HotelScreeen;