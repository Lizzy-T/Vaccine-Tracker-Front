import { SETUSERVACCINES, LOGOUT } from '../helpers'

export const userVaccines = (state=[], action) => {
    switch(action.type){
        case SETUSERVACCINES:
            return action.list;
        case LOGOUT:
            return [];
        default: 
            return state
    }
}