import { update } from '../types/userInfosTypes'

export const UPDATE = (object) => {
    return{
        type: UP_DATE,
        object: object
    }
}
