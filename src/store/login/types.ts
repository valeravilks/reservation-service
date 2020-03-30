export interface IState {
    name: string,
    age: number
}

export const SING_IN = 'SING_IN';
export const SING_UP = 'SING_UP';

interface SingIn {
    type: typeof SING_IN,
    name: string
}

interface DelAge {
    type: typeof SING_UP,
    age: string
}

export type LoginActionType = SingIn | DelAge;