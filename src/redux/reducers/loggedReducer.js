import { LOG_IN, LOG_OUT, UP_DATE } from '../types/loggedTypes';
import initialState from '../initialState';

const loggedReducer = (state = initialState, action) => {
  const { type, userInfos } = action;
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        logged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        logged: false,
      };
    case UP_DATE:
      return {
        ...state,
        userInfos: {
          id: userInfos.id,
          username: userInfos.username,
          email: userInfos.email,
        },
      };
    default:
      return state;
  }
};

export default loggedReducer;
