import React from 'react';
import { AppState, AppStateStatus } from 'react-native';
import * as Updates from 'expo-updates';


const {useEffect,useRef,useState}=React;
 
interface Props {
    autoUpdate?:boolean
}
export const useAppUpdater = ({autoUpdate=false}:Props)=>{
    const [isUpdateAvailable,setUpdateAvailable] = useState(false);
    const appState = useRef(AppState.currentState);


    const UpdateApp = async ()=>{
        Updates.reloadAsync()
        .then(()=>{
            setUpdateAvailable(false);
        })
        .catch((error)=>{
            console.log('updateErr',error.message);
        })
    }


    const checkForUpdates = async()=>{
        Updates.checkForUpdateAsync()
        .then((isAvailable)=>{
            if(isAvailable){
                return Updates.fetchUpdateAsync();
            }
            throw new Error('No Updates available.');
        })
        .then(({isNew})=>{
            if(isNew){
                setUpdateAvailable(true);
            }
        })
        .catch((error)=>{})
    }


    const handleAppStateListener = (nextAppState:AppStateStatus)=>{
        if(nextAppState === 'active') {
            checkForUpdates();
        }
        appState.current = nextAppState;
    }


    useEffect(()=>{
        checkForUpdates();
        AppState.addEventListener('change',handleAppStateListener);


        const subscriptions = Updates.addListener(({type})=>{
            if(type === Updates.UpdateEventType.UPDATE_AVAILABLE){
                setUpdateAvailable(true);
                if(autoUpdate){UpdateApp()}
            }
        })


        return ()=>{
            AppState.removeEventListener('change',()=>{
                subscriptions.remove();
            })
        }
    },
    []);


    return {isUpdateAvailable,checkForUpdates,UpdateApp}
}