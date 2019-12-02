import { LOGIN, BASE_URL, handleResponse } from '../helpers'

export const loginUser = (dispatch, user) => {
    fetchLogin(user)
        .then(handleResponse)
        .then(user => dispatch({type: LOGIN, user}))   
}

const fetchLogin = (user) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}