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
                <View>
                    <Text style={styles.nombre}>Hotel 2 Aries</Text>
                    <Text style={styles.informacion}>Información</Text>
                    <Text style={styles.Detalle}>Hotel 2 Aries le ofrece un servicio con todas las comodidades que el cliente se merece ademas cuenta con alquiler de local para bodas, cumpleaños, bautizos, etc.</Text>
                   
                </View>
                <View  style={styles.container}>
                    <Text>

                    </Text>
                    <Image style={styles.img}
                        source = { require('../image/1.jpg')} style= {{width:285, height:225}}
                    />

                     <Text style={styles.x}>Direccion: Del pollo estrella 1 cuadra al sur media al oeste juigalpa-chontales</Text>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    nombre: {
      color: '000000',
      fontWeight: 'bold',
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop: 10,
    },

    informacion: {
        color: '7e7575',
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 15,
        
      },
      Detalle: {
        color: '000000',
        fontWeight: 'Regular',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 20,
        lowerpart: 10,
      },
      img:{
            justifyContent: 'center',
            paddingHorizontal: 15,
            borderRadius: 15,
            marginTop: 10,
            marginLeft: 10,          
      },
      x: {
        color: '000000',
        fontWeight: 'Regular',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,

      },

      container:{
        alignItems: 'center',
        justifyContent: 'center',
      }
      
  });

export default HotelAriesScreen;