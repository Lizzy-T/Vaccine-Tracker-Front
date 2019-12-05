export const SET_VACCINE_LIST = 'SET_VACCINE_LIST'

export const BASE_URL = "http://localhost:9000"


export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SETUSER = 'SETUSER'
export const SETUSERVACCINES = 'SETUSERVACCINES'
export const ADDVACCINE = 'ADDVACCINE'


export const handleResponse = (response) => (response.json())

export const fetchCall = (endpoint, method='GET', content=null) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    const TOKEN = localStorage.token
    
    if (TOKEN) { headers['Authorization'] = `Bearer ${TOKEN}`}
    
    if (content) {
        const body = JSON.stringify(content)
        return fetch(`${BASE_URL}/${endpoint}`, { 
            method, 
            headers, 
            body
        })
    } else {
        return fetch(`${BASE_URL}/${endpoint}`, { 
            method, 
            headers 
        })
    }
}

export const justFetch = (endpoint) => {
    return fetch(`${BASE_URL}/${endpoint}`)
}

export const navigateTo = (history, path) => {
    history.push({
        pathname: `/${path}`,
        state: { fromDashboard: true }
    })
}