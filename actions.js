//redux thunk imp
/*
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants'
import getPeople from './api'

export function getData() {
    return {type: FETCHING_DATA}
}

export function getDataSuccess(data) {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export function getDataFailure() {
    return {type: FETCHING_DATA_FAILURE}
}

export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        getPeople().then((data) => {
            dispatch(getDataSuccess(data))
        }).catch((err) => console.log('err:', err))
    }
} 
*/

//redux saga imp
/*
import {FETCHING_DATA} from './constants'

export function fetchData() {
    return {type: FETCHING_DATA}
}
*/

// redux rxjs imp
/*
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants'

export function fetchData() {
    return {type: FETCHING_DATA}
}

export function getDataSuccess(data) {
    return {type: FETCHING_DATA_SUCCESS, data}
}

export function getDataFailure(error) {
    return {type: FETCHING_DATA_FAILURE, errorMessage: error}
}
*/

//redux promise middleware imp

import {FETCH_DATA} from './constants'
import getPeople from './api'

export function fetchData() {
    return {type: FETCH_DATA, payload: getPeople()}
}