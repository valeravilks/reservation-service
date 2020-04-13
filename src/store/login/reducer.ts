import {AUTH_PROCESS, ERROR_AUTH, IS_AUTH, IState, LoginActionType,} from './types';

import Firebase from '../firebase';

const initialState: IState = {
    isAuth: false,
    errorAuth: false,
    authProcess: false,
    user: null
};

export default function(state:IState = initialState, action: LoginActionType): IState{
    switch(action.type){
        case ERROR_AUTH:
            return {...state, errorAuth: action.status};
        case AUTH_PROCESS:
            return {...state, authProcess: action.status};
        case IS_AUTH:
            return {...state, isAuth: action.value};
        default:
            return state;
    }
}
