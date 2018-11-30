import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
}
from 'react-native';
import SuggestionDatail from '../containers/SuggestionDatail-containers';


class SuggestiondatailScreen extends Component {

    render() {

        return (
            <View>
                <Text style={styles.Expreso}>Linea de Buses Expresos</Text>
                <SuggestionDatail/>
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

export default SuggestiondatailScreen;