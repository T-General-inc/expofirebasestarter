import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "./Routes";
import { AppContext } from "../context";

const Stack = createStackNavigator();

export default function AuthStack({}:any){
    //const {state} = React.useContext(AppContext);
    
    return(
        <Stack.Navigator>
            {
                AuthRoutes.map(({key,component,name,options})=>{
                    return(
                        <Stack.Screen
                            key={key}
                            name={name}
                            component={component}
                            options={{...options}}
                        />
                    )
                })
            }
        </Stack.Navigator>
    );
}