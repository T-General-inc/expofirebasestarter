import React from 'react';
import * as Updates from 'expo-updates';
import { AppContext } from '../context';
import { Firebase, FirebaseAuth, Firestore } from '../constants/Firebase';
import { signinParams, signupParams } from '../constants/Types';
const {useEffect,useState}=React;
 
interface Props{
    checkLogin?:boolean
}
export const useAuthentication = ({checkLogin=false}:Props)=>{
    const { dispatch } = React.useContext(AppContext);
    const [authState,setAuthState] = React.useState({loading:true});


    const Ref = Firestore.collection('Users');
    const AccountsRef = Firestore.collection('Accounts');
    
    const CheckLogin = async ()=>{
        return FirebaseAuth.onAuthStateChanged(async (user:any) => {
            if(user) {
                
            }
            else {
                Logout();
                setAuthState({loading:false});
            }
        });
    }


    const Login = async ({email,password}:signinParams)=>{
        return FirebaseAuth.signInWithEmailAndPassword(email, password)
        .then((user:any)=>{
            
        })
        .catch((error:Error)=>{
            throw new Error("Invalid login credentials.");
        })
    }
    const Logout = async ()=>{
        FirebaseAuth.signOut();
        dispatch({ type: 'setUserInitial', payload: {user:{},isloggedIn:false} });
    }
    const pollVerification = async (user:any) => {
        let timeout = 0;
        const poll = new Promise((resolve, reject) => {
          const pollInterval = setInterval(() => {
            user?.reload();
            const provider = user?.providerData[0]?.providerId;
            //console.log('provider: ', provider);
            const isVerified = (provider == 'password' || provider == 'phone') ? user?.emailVerified : true;
            //console.log('check Verifiy',isVerified);
            if (isVerified) {
              //clearInterval();
              //getUserData();
              resolve(pollInterval);
            }
            if (timeout >= 1000) {
              //timeout after 15minutes
              reject('time out');
            }
            timeout++;
          }, 1000);
        });
    
        poll.then(
          async function (value: any) {
            //console.log('resolved');
            clearInterval(value);
            await Updates.reloadAsync();
          },
          function (error) {
            console.log('error: ', error.message);
            clearInterval();
          }
        );
      };
    
    const Signup = async ({name,email,password}:signupParams)=>{
            
    }
 
    useEffect(()=>{
        let unSubscribe: any = false;
        if(checkLogin) unSubscribe = CheckLogin();


        return ()=>{
            //if(unSubscribe) return unSubscribe();
        }
    },
    []);
    return {...authState,CheckLogin,Login,Logout,Signup};
}