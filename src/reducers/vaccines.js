import { SET_VACCINE_LIST } from '../helpers'

export const vaccines = (state=[], action) => {
    switch(action.type){
        case SET_VACCINE_LIST:
            return action.vaccines
        default: 
            return state
    }
}