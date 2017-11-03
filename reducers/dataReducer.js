//standard redux imp

// import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants'
// const initialState = {
//     data: [],
//     dataFetched: false,
//     isFetching: false,
//     error: false
// }

// export default function dataReducer(state = initialState, action) {
//     switch (action.type) {
//         case FETCHING_DATA:
//             return {
//                 ...state,
//                 data: [],
//                 isFetching: true
//             }
//         case FETCHING_DATA_SUCCESS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 data: action.data
//             }
//         case FETCHING_DATA_FAILURE:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error: true
//             }
//         default:
//             return state
//     }
// }

//redux promise middleware imp

import {FETCH_DATA_PENDING, FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED} from '../constants'
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCH_DATA_FULFILLED:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case FETCH_DATA_REJECTED:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}