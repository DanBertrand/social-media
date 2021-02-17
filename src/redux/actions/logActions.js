import { LOG_IN, LOG_OUT, UP_DATE } from '../types/loggedTypes'

export const LOGIN = () => {
    return{
        type: LOG_IN
    }
}

export const  LOGOUT = () => {
    return{
        type:LOG_OUT
    }
}

export const UPDATE = (userInfos) => {
    return{
        type: UP_DATE,
        userInfos
    }
}
