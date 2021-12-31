import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";
// import 'firebase/analytics';
import { LogBox, Platform } from 'react-native';
import Constants from 'expo-constants';


const {manifest} = Constants;
const idAddress = manifest?.debuggerHost?.split(':')[0] ?? 'localhost';
const useEmulator = manifest?.extra?.useEmulator ?? false;


const webConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
const androidConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
const iosConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};


//made em separate to experiment with logging and analytics
let firebaseConfig = webConfig;
switch(Platform.OS) {
  case 'android':{
    firebaseConfig = androidConfig;
    break;
  }
  case 'ios':{
    firebaseConfig = iosConfig;
    break;
  }
  default:{break;}
}


firebase.initializeApp(firebaseConfig);
// firebase.analytics();


if( Platform.OS != 'web'  ) {
  LogBox.ignoreAllLogs(); //TODO: remember to resolve this
  const _console = { ...console };
  console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1 && message.indexOf('VirtualizedLists should never be nested')<= -1) {
       _console.warn(message);
       }
    };
}


export const Firebase = firebase;
export const FirebaseAuth = firebase.auth();
if(useEmulator)FirebaseAuth.useEmulator("http://"+idAddress+":9099");
export const Firestore = firebase.firestore();
if(useEmulator)Firestore.useEmulator(idAddress, 8080);
export const FirebaseStorage = firebase.storage();
//FirebaseStorage.useEmulator("localhost", 9199);
export const FieldValue = firebase.firestore.FieldValue;


