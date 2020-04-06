import {ERROR_AUTH, LOGIN_OUT, SING_IN_EMAIL, SING_UP_EMAIL, NOT_ERROR_AUTH} from "./types";

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

export function errorAuthAction() {
    return {
        type: ERROR_AUTH,
    }
}

export function notErrorAuthAction() {
    return {
        type: NOT_ERROR_AUTH,
    }
}