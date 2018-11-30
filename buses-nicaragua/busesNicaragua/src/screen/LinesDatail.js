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
/*
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
    };*/

    render() {

        return (
            <View>
                 <Text style={styles.Expreso}>Linea de Buses Ruteados</Text>
                <Linesdatail/>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    Expreso: {
        color: '000000',
        fontWeight: 'Bold',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        borderRadius: 4,
        marginTop: 3,
        
      },
  });

export default LinesdatailScreen;