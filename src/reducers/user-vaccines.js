import { SETUSERVACCINES, LOGOUT, ADDVACCINE } from '../helpers'

export const userVaccines = (state=[], action) => {
    switch(action.type){
        case SETUSERVACCINES:
            return action.list;
        case LOGOUT:
            return [];
        case ADDVACCINE:
            return [action.vaccine, ...state]
        default: 
            return state
    }
}