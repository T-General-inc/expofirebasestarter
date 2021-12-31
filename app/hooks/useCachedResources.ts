import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { useAuthentication } from './useAuthentication';


export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [resLoadComplete,setResLoadComplete] = React.useState(false);
  const {loading:authLoading} = useAuthentication({checkLogin:true});


  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setResLoadComplete(true);
        SplashScreen.hideAsync();
      }
    }


    loadResourcesAndDataAsync();
  }, []);


  React.useEffect(()=>{
    if(!authLoading){
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  },[authLoading]);


  return isLoadingComplete;
}