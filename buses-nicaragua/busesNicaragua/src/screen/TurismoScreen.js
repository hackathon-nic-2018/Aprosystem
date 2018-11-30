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


    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button}>
                     <Button
                         onPress={this.onClickHotelBusquedaScreen}
                         title="Hotel"
                         color="#193555"
                     />
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
        marginTop: 10,
        backgroundColor: '000000'
      }
  });

export default TurismoScreen;