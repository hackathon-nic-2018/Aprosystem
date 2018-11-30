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
      color: 'red',
      fontWeight: 'bold',
      fontSize: 18,
      justifyContent: 'center',
      paddingHorizontal: 15
    },
  });

export default SuggestiondatailScreen;