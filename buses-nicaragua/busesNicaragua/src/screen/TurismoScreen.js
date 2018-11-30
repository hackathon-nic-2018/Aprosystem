import React, { Component } from 'react';
import {
    View, 
    StyleSheet,
    Text
}
from 'react-native';
import { withNavigation } from 'react-navigation';

class TurismoScreen extends Component{

    onClickBusquedaScreen = () => {
        this.props.navigation.navigate('BusquedaScreen');
    };


    render(){
        return(
            <View>
               <Text style={styles.Desarrolladores}>Desarrollador</Text>
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
      }
  });

export default TurismoScreen;