import { LOG_IN, LOG_OUT } from '../types/loggedTypes'

export const LOGIN = (logged) => {
    return{
        type: LOG_IN,
        logged
    }
}

export const  LOGOUT = (logged) => {
    return{
        type:LOG_OUT,
        logged
    }
}