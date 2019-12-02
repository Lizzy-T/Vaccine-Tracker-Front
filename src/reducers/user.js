import { LOGIN, LOGOUT } from '../helpers'

export const user = (state={}, action) => {
    switch(action.type){
        case LOGIN:
            return action.user;
        case LOGOUT:
            return {};
        default:
            return state
    }
}