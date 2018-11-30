import React, {Component} from 'react';
import {
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
    StyleSheet,
}
from 'react-native';
import Linesdatail from '../containers/linesdatail-container';


class LinesdatailScreen extends Component {

    static navigationOptions = {
        headerRight: (
            <View
                style={{marginRight: 8,}}
            >
                <TouchableOpacity
                    onPress={ () => ToastAndroid.show('Falta el mapa', ToastAndroid.LONG) }
                >
                    <Text
                        style={{ borderRadius: 8, height: 32, fontSize: 18, color: '#fff', fontWeight: 'bold', }}
                    >
                        Map
                    </Text>
                </TouchableOpacity>
            </View>
        ),
    };

    render() {

        return (
            <View>
                <Text style={styles.Expreso}>Linea de Buses Expresos</Text>
                <Linesdatail/>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    Expreso: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 18,
      justifyContent: 'center',
      paddingHorizontal: 15
    },
  });

export default LinesdatailScreen;