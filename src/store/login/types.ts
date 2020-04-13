export interface IState {
    isAuth: boolean,
    errorAuth: boolean,
    authProcess: boolean,
    user: any
}

export const SING_IN_EMAIL = 'SING_IN_EMAIL';
export const LOGIN_OUT = 'LOGIN_OUT';
export const SING_UP_EMAIL = 'SING_UP_EMAIL';
export const ERROR_AUTH = 'ERROR_AUTH';
export const AUTH_PROCESS = 'AUTH_PROCESS';
export const IS_AUTH = 'IS_AUTH';
export const CHECK_AUTH = 'CHECK_AUTH';

interface ISingInEmail {
    type: typeof SING_IN_EMAIL,
    email: string
}

interface ILoginOut {
    type: typeof LOGIN_OUT,
}

interface ISingUpEmail {
    type: typeof LOGIN_OUT,
    email: string
}

interface IErrorAuth {
    type: typeof ERROR_AUTH,
    status: boolean
}

interface IAuthProcess {
    type: typeof AUTH_PROCESS,
    status: boolean
}

interface IIsAuth {
    type: typeof IS_AUTH,
    value: boolean
}

interface ICheckAuth {
    type: typeof CHECK_AUTH,
    value: boolean
}

export type LoginActionType =
    ISingInEmail |
    ILoginOut |
    ISingUpEmail |
    IErrorAuth |
    IAuthProcess |
    IIsAuth |
    ICheckAuth;