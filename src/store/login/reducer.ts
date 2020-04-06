import {
    ERROR_AUTH,
    AUTH_PROCESS,
    IState,
    LoginActionType,
} from './types';

import Firebase from '../firebase';

const initialState: IState = {
    isAuth: Firebase.inAuth(),
    errorAuth: false,
    authProcess: false
};

export default function(state:IState = initialState, action: LoginActionType): IState{
    switch(action.type){
        case ERROR_AUTH:
            return {...state, errorAuth: action.status};
        case AUTH_PROCESS:
            return {...state, authProcess: action.status};
        default:
            return state;
    }
}
