import { LOGIN, handleResponse, fetchCall } from '../helpers'

export const loginUser = (dispatch, user) => {
    fetchLogin(user)
        .then(handleResponse)
        .then(user => dispatch({type: LOGIN, user}))   
}

const fetchLogin = (user) => {
    return fetchCall("login", "POST", user)
}