import { LOGIN, LOGOUT, SETUSER } from '../helpers'

export const user = (state={}, action) => {
    switch(action.type){
        case LOGIN:
            return action.user;
        case LOGOUT:
            return {};
        case SETUSER:
            return action.user;
        default:
            return state
    }
}