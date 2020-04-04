import {LOGIN_OUT, SING_IN_EMAIL, SING_UP_EMAIL} from "./types";

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