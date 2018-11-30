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
import SuggestionDatail from './src/screen/SuggestionDatail';
import HotelScreen from './src/screen/HotelScreen';
import HotelAries from './src/screen/HotelAries';
import CentroRecreativoScreen from './src/screen/CentroRecreativosScreen';
import CentroPeñitaScreen from './src/screen/CentroPeñitasScreen';


import TurismoScreen from './src/screen/TurismoScreen';
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
        backgroundColor: '#193555',
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
        backgroundColor: '#193555',
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
        backgroundColor: '#193555',
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
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
  Suggestiondata: {
    screen: SuggestionDatail,
    navigationOptions: {
      title: 'Datos de sugerencias',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const TurismoStackNavigator = createStackNavigator({
  Turismo: {
    screen: TurismoScreen,
    navigationOptions: {
      title: 'Turistica y Hotelera',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

  Hotel: {
    screen: HotelScreen,
    navigationOptions:{
      title: 'Información de Hoteles',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  HotelAries:{
    screen: HotelAries,
    navigationOptions:{
      title: 'Hotel 2 Aries',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Centros: {
    screen: CentroRecreativoScreen,
    navigationOptions:{
      title: 'Centros Recreativos',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },

  CentroPeñita:{
    screen: CentroPeñitaScreen,
    navigationOptions:{
      title: 'Club las Peñitas',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
    
});


const MyAboutStackNavigator = createStackNavigator({
  About: {
    screen: MyAboutScreen,
    navigationOptions: {
      title: 'Acerca de',
      headerStyle: {
        backgroundColor: '#193555',
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

  Turismo: {
    screen: TurismoStackNavigator,
    navigationOptions: {
      title: 'Turistica y Hotelera',
      drawerIcon: <Image source = { require('./src/image/turista.png')} style= {{width: 32, height: 32}}/>
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