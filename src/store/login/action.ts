import {
    ERROR_AUTH,
    LOGIN_OUT,
    SING_IN_EMAIL,
    SING_UP_EMAIL,
    AUTH_PROCESS,
    IS_AUTH, CHECK_AUTH, CHECK_IN_AUTH
} from "./types";

export function singInAction(email: string, pass: string) {
    return {
        type: SING_IN_EMAIL,
        email,
        pass
    }
}

export function singLoginOut() {
    return {
        type: LOGIN_OUT,
    }
}

export function singUpAction(email: string, pass: string) {
    return {
        type: SING_UP_EMAIL,
        email,
        pass
    }
}

export function errorAuthAction(status: boolean) {
    return {
        type: ERROR_AUTH,
        status
    }
}

export function authProcessAction(status: boolean) {
    return {
        type: AUTH_PROCESS,
        status
    }
}

export function isAuth(value: boolean) {
    return {
        type: IS_AUTH,
        value
    }
}

export function checkAuth() {
    return {
        type: CHECK_AUTH
    }
}

export function checkIsAuth() {
    return {
        type: CHECK_IN_AUTH
    }
}