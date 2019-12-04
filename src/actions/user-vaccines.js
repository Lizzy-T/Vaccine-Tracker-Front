import { SETUSERVACCINES, fetchCall, handleResponse, ADDVACCINE } from '../helpers'

export const setUserVaccines = (dispatch, id) => {
    fetchUserVaccines()
        .then(handleResponse)
        .then(list => dispatch({type: SETUSERVACCINES, list}))
}

const fetchUserVaccines = () => {
    return fetchCall(`/my_vaccines`, 'GET')
}

export const addVaccine = (dispatch, vaccine) => {
    postVaccine(vaccine)
        .then(handleResponse)
        .then(vaccine => dispatch({type: ADDVACCINE, vaccine}))
}

const postVaccine = (vaccine) => {
    return fetchCall('/my_vaccines', 'POST', vaccine)
}