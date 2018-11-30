import React, { Component } from 'react';
import {
    View, 
    StyleSheet
}
from 'react-native';
import { withNavigation } from 'react-navigation';

class SettingScreen extends Component{

    onClickBusquedaScreen = () => {
        this.props.navigation.navigate('BusquedaScreen');
    };


    render(){
        return(
            <View>
                <Text>mas o menos</Text>
            </View>
        )
    }
                    
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'flex-end',
    },
    buttonContainer: {
      margin: 100,
      marginTop: 100
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      marginTop: 100,
      flexDirection: 'row',
      justifyContent: 'flex-end' 
       }
  });

export default SettingScreen;