import { 
    LOGIN,
    LOGOUT, 
    handleResponse, 
    fetchCall,
    SETUSER
 } from '../helpers'


export const setUser = (dispatch, id) => {
    fetchUser(id)
    .then(handleResponse)
    .then(console.log)
    // .then(user => dispatch({type: SETUSER, user}))
    
}

const fetchUser = (id) => {
    console.log(id)

    return fetchCall(`users/${id}`, 'SHOW')
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