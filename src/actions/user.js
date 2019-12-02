import { 
    LOGIN,
    LOGOUT, 
    handleResponse, 
    fetchCall
 } from '../helpers'


export const logoutUser = (dispatch) => {
    dispatch({type: LOGOUT})
}

export const loginUser = (dispatch, user) => {
    return fetchLogin(user)
        .then(handleResponse)
        .then(saveToken)
        .then(user => dispatch({type: LOGIN, user}))   
}

const saveToken = (response) => {
    if (response.token){ localStorage.setItem("token", response.token)}
    return response
}

const fetchLogin = (user) => {
    return fetchCall("login", "POST", user)
}