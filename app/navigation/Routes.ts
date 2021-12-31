import * as Linking from 'expo-linking';
import { RouteType } from '../constants/Types';

import LandingScreen from '../screens/Landing';

export const RouteConfig = { //handles web route urls
    screens:{
        Landing: '/',
        NotFound: '*'
    }
}

export const linking = {
    prefixes: [Linking.createURL('/')],
    config: RouteConfig,
}

//TODO: could probably move routes to seperate files
export const AuthRoutes:RouteType[] = [];
export const MainRoutes:RouteType[] = [
    {
        key:'landing',
        component:LandingScreen,
        isSecured:false,
        name:'Landing',
        options:{}
    }
];
export const WebRoutes:RouteType[] = [
    {
        key:'landing',
        component:LandingScreen,
        isSecured:false,
        name:'Landing',
        options:{}
    }
];