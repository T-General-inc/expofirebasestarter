import { FC } from "react";

export interface GlobalActions {
    payload: any,
    type: any,
}
export interface GlobalContext {
    state:GlobalState
    dispatch:any //TODO: figure out what this is lol
}
export interface GlobalState {
    isloggedIn:boolean
}

export interface RouteType {
    key:string,
    component: FC,
    isSecured:boolean,
    name:string,
    options:any
}

export interface signinParams {email: string,password:string}

export interface signupParams {name:string,phone:string,email: string,password:string,phoneCredentials:any}