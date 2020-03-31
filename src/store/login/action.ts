import { SING_IN } from "./types";

export function singIn(email:any, pass:any) {
    return {
        type: SING_IN,
        email,
        pass
    }
}