import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
}
from 'react-native';
import { withNavigation } from 'react-navigation';

class BusquedaScreen extends Component{

    render(){
        return(
            <SafeAreaView style={style.container}>
                <StatusBar barStyle = "light-content"/>
                <KeyboardAvoidingView behavior= 'padding' style={styles.container}>  
                    <TouchableWithoutFeedback style = {styles.container}
                        onPress = {Keyboard.dismiss} >
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.imput}
                                placeholder = "Tu Origen"
                                placeholderTextColor= 'rgba(255,255,255,0.8)'
                                autoCorrect = {false}
                            />

                            <TextInput style={styles.imput}
                                placeholder = "Tu Destino"
                                placeholderTextColor= 'rgba(255,255,255,0.8)'
                                autoCorrect = {false}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }                  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column',
    },

    infoContainer: {
        position: 'absolute',
        fontSize: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
    },

    imput: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    }
})

export default BusquedaScreen;
