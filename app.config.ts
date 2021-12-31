import { ExpoConfig, ConfigContext } from '@expo/config';

//import the app.jsons
import AppJson from './appJson/app.json';
import StagingJson from './appJson/app.staging.json';
import ProductionJson from './appJson/app.prod.json';
//TODO move the above configs to this file

interface ConfigProps {
    config: ExpoConfig
}

type modeType = 'development' | 'staging' | 'production';

export default ()=>{
    const mode:modeType = ( (process.env.mode) as modeType ) ?? 'development';
    const useEmulator = process.env.emulator ?? false;

    let strings; //object of platform specific strings added in switch statement, imported in 'config/strings.ts'
    let config:any; //platform specific config data taken from app.json files

    switch(mode) {
        case 'production':{
            config = ProductionJson;
            strings = {
                ...config.extra?.strings??null,
            };
            break;
        }
        case 'staging':{
            config = StagingJson;
            strings = {
                ...config.extra?.strings??null,
            };
            break;
        }
        default:{
            config = AppJson;
            strings = {
                ...config.extra?.strings??null,
            };
            break;
        }
    }

    return {
        ...config,
        extra: {
            ...config.extra,
            mode:mode,
            strings:strings,
            useEmulator:useEmulator,
        }
    }
}