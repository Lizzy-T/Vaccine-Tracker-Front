import { combineReducers } from 'redux'

import { vaccines } from './vaccines'
import { user } from './user'
import { userVaccines } from './user-vaccines'

export default combineReducers({
    vaccines,
    user,
    userVaccines
})