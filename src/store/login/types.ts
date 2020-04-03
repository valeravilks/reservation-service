export interface IState {
    email: string,
    age: number
}

export const SING_IN_EMAIL = 'SING_IN_EMAIL';
export const LOGIN_OUT = 'LOGIN_OUT';
export const SING_UP = 'SING_UP';

interface SingInEmail {
    type: typeof SING_IN_EMAIL,
    email: string
}

interface LoginOut {
    type: typeof LOGIN_OUT,
}

export type LoginActionType = SingInEmail | LoginOut;