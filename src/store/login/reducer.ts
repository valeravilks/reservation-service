import { IState, ADD, DEL, LoginActionType } from './types';

const initialState: IState = {
    name: 'first',
    age: 22
};

export default function(state:IState = initialState, action: LoginActionType): IState{
    switch(action.type){
        case ADD:
            return {...state, name: 'ddd'};
        case DEL:
            return state;
        default:
            return state;
    }
}