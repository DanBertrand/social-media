import UPDATE from '../types/userInfosTypes'

const initialState = {
    id: '',
    username:'',
    email:''
};


export const userInfoReducer = (state = initialState, action) => {
    const { type, object } = action
    console.log("USER INFO ACTION: ", action)
    console.log("USER INFO Object: ", object)
    switch(type) {
      case UPDATE:
        return {
          id: object.id,
          username: object.username,
          email: object.email
        };
      default:
        return state;
    }
  }

export default userInfoReducer