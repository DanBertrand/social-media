import UPDATE  from '../types/userInfosTypes'

const UP_DATE = (object) => {
    return{
        type: UPDATE,
        object: object
    }
}

export default UP_DATE
