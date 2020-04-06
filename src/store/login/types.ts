export interface IState {
    email: string,
    isAuth: boolean,
    errorAuth: boolean,
    authProcess: boolean,
    age: number
}

export const SING_IN_EMAIL = 'SING_IN_EMAIL';
export const LOGIN_OUT = 'LOGIN_OUT';
export const SING_UP_EMAIL = 'SING_UP_EMAIL';
export const ERROR_AUTH = 'ERROR_AUTH';
export const NOT_ERROR_AUTH = 'NOT_ERROR_AUTH';
export const AUTH_PROCESS = 'AUTH_PROCESS';

interface SingInEmail {
    type: typeof SING_IN_EMAIL,
    email: string
}

interface LoginOut {
    type: typeof LOGIN_OUT,
}

interface SingUpEmail {
    type: typeof LOGIN_OUT,
    email: string
}

interface ErrorAuth {
    type: typeof ERROR_AUTH,
}

interface NotErrorAuth {
    type: typeof NOT_ERROR_AUTH,
}

interface authProcess {
    type: typeof AUTH_PROCESS,
    status: boolean
}

export type LoginActionType = SingInEmail | LoginOut | SingUpEmail | ErrorAuth | NotErrorAuth | authProcess;