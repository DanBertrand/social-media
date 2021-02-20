import { LOG_IN, LOG_OUT, UP_DATE } from '../types/loggedTypes';

export const LOGIN = () => ({
  type: LOG_IN,
});

export const LOGOUT = () => ({
  type: LOG_OUT,
});

export const UPDATE = (userInfos) => ({
  type: UP_DATE,
  userInfos,
});
