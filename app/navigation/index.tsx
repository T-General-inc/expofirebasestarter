import React from "react";
import { Provider, useTheme } from "react-native-paper";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

import Theme from "../constants/Theme";
import SplashScreen from "../components/SplashScreen";
import { linking } from "./Routes";
import MainStack from "./MainStack";
import { useAppUpdater } from "../hooks/useAppUpdater";
import useCachedResources from "../hooks/useCachedResources";
import { useColorScheme } from "react-native";

export default function Navigation(){
    const colorScheme = useColorScheme();
    const {isUpdateAvailable} = useAppUpdater({autoUpdate:true});
    const isLoadingComplete = useCachedResources();

    if(isLoadingComplete) return null;

    return(
        <Provider theme={colorScheme==='dark'? Theme.DarkTheme : Theme.LightTheme}>
            <NavigationContainer
                fallback={<SplashScreen/>}
                linking={linking}
                theme={colorScheme==='dark'?DarkTheme : DefaultTheme}
            >
                <MainStack/>
            </NavigationContainer>
        </Provider>
    )
}