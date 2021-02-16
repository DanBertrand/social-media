import { logIn, logOut  } from '../actions/logActions'
import {LOG_IN, LOG_OUT } from '../types/loggedTypes'

const initialState = {
    logged: false
  };
  

const loggedReducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
      case LOG_IN:
        return {
            logged: true
        };
      case LOG_OUT:
        return {
            logged: false
        };
      default:
        return state;
    }
  
    return state;
  }

  export default loggedReducer