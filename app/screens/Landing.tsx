import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function LandingScreen(){ 
    const {colors} = useTheme();
    const styles = Styles(colors);
    
    return(
        <View>
            <Text>Hello World</Text>
        </View>
    );
}

const Styles = (colors:any)=>{
return (
StyleSheet.create({})
);
}