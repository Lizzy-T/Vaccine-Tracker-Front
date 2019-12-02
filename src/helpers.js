export const SET_VACCINE_LIST = 'SET_VACCINE_LIST'

export const BASE_URL = "http://localhost:9000"


export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const handleResponse = (response) => (response.json())

export const fetchCall = (endpoint, method, content) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    
    const token = localStorage.token
    if (token) { headers['Authorization'] = `Bearer ${token}`}
    
    const body = JSON.stringify(content)

    return fetch(`${BASE_URL}/${endpoint}`, { 
        method, 
        headers, 
        body
    })
}

export const navigateTo = (history, path) => {
    history.push({
        pathname: `/${path}`,
        state: { fromDashboard: true }
    })
}