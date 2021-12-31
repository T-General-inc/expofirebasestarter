import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppContextProvider } from './app/context';
import Navigation from './app/navigation';

export default function App(){
  return(
    <AppContextProvider>
      <Navigation/>
      <StatusBar/>
    </AppContextProvider>
  );
}