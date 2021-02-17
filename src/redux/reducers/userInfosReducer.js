import UPDATE from '../types/userInfosTypes'

const initialState = {
    id: '',
    username:'',
    email:''
};


export const userInfosReducer = (state = initialState, action) => {
    const { type, object } = action
    console.log("USER INFO ACTION: ", action)
    console.log("USER INFO Object: ", object)
    console.log("USER STATE: ", state)
    switch(type) {
      case UPDATE:
        return {
          ...state,
          id: object.id,
          username: object.username,
          email: object.email
        };
      default:
        return state;
    }
  }

export default userInfosReducer