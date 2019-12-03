import { SETUSERVACCINES, fetchCall, handleResponse } from '../helpers'

export const setUserVaccines = (dispatch, id) => {
    fetchUserVaccines(id)
        .then(handleResponse)
        .then(list => dispatch({type: SETUSERVACCINES, list}))
}

const fetchUserVaccines = (id) => {
    return fetchCall(`users/${id}/my_vaccines`, 'GET')
}