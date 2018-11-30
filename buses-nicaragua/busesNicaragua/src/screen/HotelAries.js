import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

class HotelAriesScreen extends Component{
    render(){
        return(
            <View>
                 <Text style={styles.nombre}>Hotel 2 Aries</Text>
                <Text style={styles.informacion}>Información</Text>
                <Text style={styles.Detalle}>Hotel 2 Aries le ofrece un servicio con todas las comodidades que el cliente se merece ademas cuenta con alquiler de local para bodas, cumpleaños, bautizos, etc.</Text>
                <Image style={styles.img}>
                     source = { require('../image/2.png')} style= {{width:350, height:400}}
                </Image>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    nombre: {
      color: '000000',
      fontWeight: 'bold',
      fontSize: 14,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop: 10,
    },

    informacion: {
        color: '7e7575',
        fontWeight: 'Regular',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 15,
        
      },
      Detalle: {
        color: '000000',
        fontWeight: 'bold',
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 25,
      },
      img:{
          marginLeft: 10,
          marginTop: 10,
      }
      
  });

export default HotelAriesScreen;