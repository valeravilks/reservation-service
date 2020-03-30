import { IState, SING_UP, SING_IN, LoginActionType } from './types';

const initialState: IState = {
    name: 'first',
    age: 22
};

export default function(state:IState = initialState, action: LoginActionType): IState{
    switch(action.type){
        case SING_IN:
            return {...state, name: 'ddd'};
        case SING_UP:
            return state;
        default:
            return state;
    }
}