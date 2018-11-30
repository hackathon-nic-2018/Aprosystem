import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
}
from 'react-native';

class MyAboutScreen extends Component {
    
    render() {
        return (
            <View>
            <Text style={styles.Desarrolladores}>Desarrollador</Text>
            <Text style={styles.Empresa}>Aprosystem</Text>
            <Text style={styles.Version}>Version</Text>
            <Text style={styles.Numero}>1.0.1</Text>
            <Text style={styles.Description}>Buses Nicaragua proporciona un aproximado del horario de los autobuses sin responsabilisarce </Text>
         </View>
        );
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

    Empresa: {
        color: '7e7575',
        fontWeight: 'Regular',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 15,
        
      },
      Version: {
        color: '000000',
        fontWeight: 'bold',
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 25,
      },
  
      Numero: {
        color: '7e7575',
        fontWeight: 'Regular',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 15,
        
      },

      Nota: {
        color: '000000',
        fontWeight: 'bold',
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 25,
      },

      Description: {
        color: '7e7575',
        fontWeight: 'Regular',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 15,
        
      },
      
  });

export default MyAboutScreen;