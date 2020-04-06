import {ERROR_AUTH, IState, LoginActionType, SING_IN_EMAIL, NOT_ERROR_AUTH} from './types';
import Firebase from '../firebase';

const initialState: IState = {
    email: '',
    isAuth: Firebase.inAuth(),
    errorAuth: false,
    age: 22
};

export default function(state:IState = initialState, action: LoginActionType): IState{
    switch(action.type){
        case SING_IN_EMAIL:
            return {...state, email: action.email};
        case ERROR_AUTH:
            return {...state, errorAuth: true};
        case NOT_ERROR_AUTH:
            return {...state, errorAuth: false};
        default:
            return state;
    }
}
