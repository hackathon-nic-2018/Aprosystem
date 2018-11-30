/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import AppWithProvider from './AppWithProvider';
import {name as appName} from './app.json';
import firebase from 'react-native-firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWfsAxpCO4XVWSG8hWEKjr7zXX_usBdes",
    authDomain: "buses-nicaragua.firebaseapp.com",
    databaseURL: "https://buses-nicaragua.firebaseio.com",
    projectId: "buses-nicaragua",
    storageBucket: "buses-nicaragua.appspot.com",
    messagingSenderId: "267354469637"
};
const androidConfig = {
    clientId: '267354469637-tk9i8od2qv6pbsn2alpo7cmtgu20qusn.apps.googleusercontent.com',
    appId: 'AIzaSyApK0zaZrRQd3gxUPWcOwUAvqFc4is2_HU',
    apiKey: "AIzaSyAWfsAxpCO4XVWSG8hWEKjr7zXX_usBdes",
    databaseURL: "https://buses-nicaragua.firebaseio.com",
    storageBucket: "buses-nicaragua.appspot.com",
    messagingSenderId: "267354469637",
    projectId: "buses-nicaragua",
  
    // enable persistence by adding the below flag
    persistence: true,
  };
firebase.initializeApp(androidConfig);


AppRegistry.registerComponent(appName, () => AppWithProvider);
