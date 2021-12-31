import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainRoutes } from "./Routes";
import { AppContext } from "../context";
import AuthStack from "./AuthStack";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

export default function MainStack(){
    const {state} = React.useContext(AppContext);
    const {colors} = useTheme();
    const {isloggedIn} = state;

    return(
        <Stack.Navigator>
            {
                MainRoutes.map(({key,component,isSecured,name,options})=>{
                    return(
                        <Stack.Screen
                            key={key}
                            name={name}
                            component={(isSecured && !isloggedIn)? AuthStack : component}
                            options={{...options}}
                        />
                    )
                })
            }
        </Stack.Navigator>
    );
}