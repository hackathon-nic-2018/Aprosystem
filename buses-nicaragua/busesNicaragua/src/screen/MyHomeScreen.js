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
class MyHomeScreen extends Component {

    static navigationOptions = {
        title: 'Buses Nicaragua',
        headerStyle: {
            backgroundColor: '#193555',
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
                </View>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
     flex: 3,
     justifyContent: 'flex-end',
    },
  });

export default MyHomeScreen;

