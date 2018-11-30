import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

class CentroPeñitasScreen extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text style={styles.nombre}>Club Campestre las Peñitas</Text>
                    <Text style={styles.informacion}>Información</Text>
                    <Text style={styles.Detalle}>Centro recreativo las peñitas ofrece un servicio de piscinas, bar y restaurante en donde puedes disfrutar en familia a un precio muy favorable</Text>
                   
                </View>
                <View  style={styles.container}>
                    <Text>

                    </Text>
                    <Image style={styles.img}
                        source = { require('../image/2.jpg')} style= {{width:285, height:225}}
                    />

                     <Text style={styles.x}>Direccion: De la subasta la Chontaleña 100mt C. Rama</Text>
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

export default CentroPeñitasScreen;