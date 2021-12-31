import React, { createContext, useReducer } from "react";
import { GlobalActions, GlobalContext, GlobalState } from "../constants/Types";

const initialState:GlobalState = {
    isloggedIn:true
}

const reducer = (state:GlobalState, action:GlobalActions)=> {
    switch(action.type){}
}

const AppContext = createContext<GlobalContext>({state:initialState,dispatch:null});

const AppContextProvider = (props:any) => {
    const [state,dispatch] = useReducer<any>(reducer, initialState);
    //TODO: figure out state ts issue here
    return (//@ts-ignore
        <AppContext.Provider value={{state,dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
}

const AppConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppConsumer};