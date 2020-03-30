export interface IState {
    name: string,
    age: number
}

export const ADD = 'ADD';
export const DEL = 'DEL';

interface AddName {
    type: typeof ADD,
    name: string
}

interface DelAge {
    type: typeof DEL,
    age: string
}

export type LoginActionType = AddName | DelAge;