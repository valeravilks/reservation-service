import {IState, SING_UP, LoginActionType, SING_IN_EMAIL} from './types';

const initialState: IState = {
    email: '',
    age: 22
};

export default function(state:IState = initialState, action: LoginActionType): IState{
    switch(action.type){
        case SING_IN_EMAIL:
            return {...state, email: action.email};
        case SING_UP:
            return state;
        default:
            return state;
    }
}
