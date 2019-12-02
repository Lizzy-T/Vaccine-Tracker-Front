import { combineReducers } from 'redux'

import { vaccines } from './vaccines'
import { user } from './user'

export default combineReducers({
    vaccines,
    user
})