import React from 'react';
import {StyleSheet,View,} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function SplashScreen(){ 
const {colors} = useTheme();
const styles = Styles(colors);
    return(<View></View>)
}

const Styles = (colors:any)=>{
return (
StyleSheet.create({})
);
}