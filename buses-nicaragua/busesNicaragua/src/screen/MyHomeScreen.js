import React, {Component} from 'react';
import {
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
}
from 'react-native';
import { withNavigation } from 'react-navigation';
/*
import {Button} from 'react-native-elements';
import d from 'react-native-vector-icons'*/

class MyHomeScreen extends Component {

    static navigationOptions = {
        title: 'Buses Nicaragua',
        headerStyle: {
            backgroundColor: '#1872a7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
         fontWeight: 'bold',
          },
    };

    onClickBusquedaScreen = () => {
        this.props.navigation.navigate('BusquedaScreen');
    };

    render() {
        return (

                <View>

                    <View>
                        <Image source = { require('../image/x.png')} style= {{width: '100%', height: '100%'}} />
                        </View>       
                            <View style={styles.container}>
                                <View style={styles.alternativeLayoutButtonContainer}>
                                    <Button
                                        onPress={this.onClickBusquedaScreen}
                                        title="Busqueda Lineas"
                                        color="#blue"
                                    />
                            </View>
                    </View>
                </View>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
     flex: 3,
     justifyContent: 'flex-end',
    },
    buttonContainer: {
      margin: 40,
      marginEnd: 20,
    },
    alternativeLayoutButtonContainer: {
      margin: 40,
      marginEnd: 20,
      flexDirection: 'row',
      justifyContent: 'flex-end' 
       }
  });

export default MyHomeScreen;

