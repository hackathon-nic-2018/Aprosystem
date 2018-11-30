import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet
}
from 'react-native';
import Suggestion from '../containers/suggestion-container';
import Suggestion2 from '../containers/suggestion2-container';


class Suggestiom2Screen extends Component {


    render() {

        return (
            <View>
                <StatusBar
                    backgroundColor="#1a237e"
                    barStyle="light-content"
                />
                 <View>
                    <Text style={styles.Expreso}>Linea de Buses Expresos Nicaragua</Text>
                 </View>
                <View>
                    <Suggestion2/>
                </View>

                <View>
                    <Suggestion />
                </View>
            </View>
           
        );

    }

}

const styles = StyleSheet.create({
    Expreso: {
      color: '000000',
      fontWeight: 'Regular',
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      borderRadius: 4,
      
    },
  });

export default Suggestiom2Screen;