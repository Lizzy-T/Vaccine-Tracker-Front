import { 
  SET_VACCINE_LIST, 
  BASE_URL,
  handleResponse 
} from '../helpers'

const setVaccineList = (vaccines, dispatch) => {
    dispatch({type: SET_VACCINE_LIST, vaccines})
}

export const fetchVaccines = (dispatch) => {
    fetch(`${BASE_URL}/vaccines`)
    .then(handleResponse)
    .then(vaccineList => setVaccineList(vaccineList, dispatch))
}