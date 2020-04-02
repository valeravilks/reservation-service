export interface IState {
    email: string,
    age: number
}

export const SING_IN_EMAIL = 'SING_IN_EMAIL';
export const SING_UP = 'SING_UP';

interface SingInEmail {
    type: typeof SING_IN_EMAIL,
    email: string
}

interface DelAge {
    type: typeof SING_UP,
    age: string
}

export type LoginActionType = SingInEmail | DelAge;