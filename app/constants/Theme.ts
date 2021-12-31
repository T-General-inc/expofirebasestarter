import { DefaultTheme } from "react-native-paper";

export const DarkTheme: ReactNativePaper.Theme = {
    ...DefaultTheme,
}

export const LightTheme: ReactNativePaper.Theme = {
    ...DefaultTheme,
}

export const currentTheme = (mode: ('dark' | 'light' | undefined) ) =>{
    switch(mode){
        case 'dark': return DarkTheme;
        case 'light': return LightTheme;
        default: return LightTheme;
    }
}

export default {currentTheme,DarkTheme,LightTheme};