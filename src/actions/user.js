import { 
    LOGIN,
    LOGOUT, 
    SETUSER,
    handleResponse, 
    fetchCall,
 } from '../helpers'


export const newUser = (dispatch, user) => {
    return createUser(user)
        .then(handleResponse)
        .then(saveToken)
        .then(user => dispatch({type: SETUSER, user}))
}

const createUser = (user) => {
    return fetchCall('users', 'POST', user)
}

export const setUser = (dispatch) => {
    fetchUser()
    .then(handleResponse)
    .then(consoleAndContinue)
    .then(user => dispatch({type: SETUSER, user}))
}

const consoleAndContinue = (response) => {
    return response
}

const fetchUser = () => {
    return fetchCall(`profile`, 'GET')
}

export const logoutUser = (dispatch) => {
    localStorage.clear()
    dispatch({type: LOGOUT})
}

export const loginUser = (dispatch, user) => {
    return fetchLogin(user)
        .then(handleResponse)
        .then(saveToken)
        .then(user => dispatch({type: LOGIN, user}))   
}

const saveToken = (response) => {
    if (response.token){ 
        localStorage.setItem("token", response.token)
    }
    return response
}

const fetchLogin = (user) => {
    return fetchCall("login", "POST", user)
}