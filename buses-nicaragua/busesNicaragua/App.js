/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import {
  Image
} from 'react-native';

import MyHomeScreen from './src/screen/MyHomeScreen';

import LinesScreen from './src/screen/LinesScreen';
import MyNearbyStopsScreen from './src/screen/MyNearbyStopsScreen';
import SuggestionScreen from './src/screen/SuggestionScreen';

import SettingScreen from './src/screen/SettingScreen';
import MyAboutScreen from './src/screen/MyAboutScreen';
import Lineasdetail from './src/screen/LinesDatail';
import BusquedaScreen from './src/screen/BusquedaScreen';

import CustomDrawerContentComponent from './src/components/custom-drawer'
import { Button } from 'react-native-elements';

const MyHomeStackNavigator = createStackNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    
},
{
  initialRouteName: 'Home',
  
})

const LinesStackNavigator = createStackNavigator({
  Lines: {
    screen: LinesScreen,
    navigationOptions: {
      title: 'Lineas',
      headerStyle: {
        backgroundColor: '#136d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  lineasdata: {
    screen: Lineasdetail,
    navigationOptions: {
      title: 'Datos de lineas',
      headerStyle: {
        backgroundColor: '#136d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
}, );

const MyNearbyStopsNavigator = createStackNavigator({
  NearbyStops: {
    screen: MyNearbyStopsScreen,
    navigationOptions: {
      title: 'Paradas Cercanas',
      headerStyle: {
        backgroundColor: '#136d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const SuggestionNavigator = createStackNavigator({
  Suggestion: {
    screen: SuggestionScreen,
    navigationOptions: {
      title: 'Sugerencias',
      headerStyle: {
        backgroundColor: '#136d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const SettingStackNavigator = createStackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Ajustes',
      headerStyle: {
        backgroundColor: '#136d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});


const MyAboutStackNavigator = createStackNavigator({
  About: {
    screen: MyAboutScreen,
    navigationOptions: {
      title: 'Acerca de',
      headerStyle: {
        backgroundColor: '#136d8b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});


export default App = createDrawerNavigator({ 

    Home: {
      screen: MyHomeStackNavigator,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: <Image source={ require('./src/image/home.png') } style={{width: 32, height: 32}} />
      },
    },

    Lines: {
      screen: LinesStackNavigator,
      navigationOptions: {
        title: 'Lineas',
        drawerIcon: <Image source={ require('./src/image/Lineas.png') } style={{width: 32, height: 32}} />
      },
    },

    MyNearbyStops: {
    screen: MyNearbyStopsNavigator,
    navigationOptions: {
      title: 'Paradas Cercanas',
      drawerIcon: <Image source = { require('./src/image/Paradas.png')} style= {{width: 32, height: 32}}/>
    }
  },

  Suggestion: {
    screen: SuggestionNavigator,
    navigationOptions: {
      title: 'Sugerencias',
      borderToWidht: 2,
      drawerIcon: <Image source = { require('./src/image/Sugerencias.png')} style= {{width: 32, height: 32}}/>
    }
  },

  Setting: {
    screen: SettingStackNavigator,
    navigationOptions: {
      title: 'Ajustes',
      drawerIcon: <Image source = { require('./src/image/Ajustes.png')} style= {{width: 32, height: 32}}/>
    }
  },

  About: {
    screen: MyAboutStackNavigator,
    navigationOptions: {
      title: 'Acerca de',
      drawerIcon: <Image source = { require('./src/image/Acerca.png')} style= {{width: 32, height: 32}}/>
    }
  },

}, {
  contentComponent: CustomDrawerContentComponent,
});