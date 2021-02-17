import {LOG_IN, LOG_OUT } from '../types/loggedTypes'

const initialState = {
  logged: false
};


export const loggedReducer = (state = initialState, action) => {
    const { type } = action
    console.log("LOG ACTION: ", action)
    console.log("LOG STATE: ", state)
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
  }

