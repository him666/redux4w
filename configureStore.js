
//redux-thunk imp
// import {createStore, applyMiddleware} from 'redux'
// import app from './reducers'
// import thunk from 'redux-thunk'

// export default function configureStore() {
//     let store = createStore(app, applyMiddleware(thunk))
//     return store
// }

//redux-saga imp
/*
import {createStore, applyMiddleware} from 'redux'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(app, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(dataSaga)
    return store
}
 */

 // redux-rxjs imp

// import {createStore, applyMiddleware} from 'redux'
// import app from './reducers'

// import {createEpicMiddleware} from 'redux-observable'
// import fetchUserEpic from './epic'

// const epicMiddleware = createEpicMiddleware(fetchUserEpic)

// export default function configureStore() {
//     const store = createStore(app, applyMiddleware(epicMiddleware))
//     return store
// }

// redux promise middleware

import {createStore, applyMiddleware} from 'redux'
import app from './reducers'
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {
    let store = createStore(app, applyMiddleware(promiseMiddleware()))
    return store
}