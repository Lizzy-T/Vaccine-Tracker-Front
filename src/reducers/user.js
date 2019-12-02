import { LOGIN } from '../helpers'

export const user = (state={}, action) => {
    switch(action.type){
        case LOGIN:
            return action.user
        default:
            return state
    }
}