import { 
    LOGIN,
    LOGOUT, 
    handleResponse, 
    fetchCall,
    SETUSER
 } from '../helpers'


export const setUser = (dispatch) => {
    fetchUser()
    .then(handleResponse)
    .then(user => dispatch({type: SETUSER, user}))
    
}

const fetchUser = (id) => {
    return fetchCall(`profile`, 'GET')
}

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
    if (response.token){ 
        localStorage.setItem("token", response.token)
        localStorage.setItem("user_id", response.id)
    }
    return response
}

const fetchLogin = (user) => {
    return fetchCall("login", "POST", user)
}