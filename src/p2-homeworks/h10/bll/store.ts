import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    loading: loadingReducer,

})

 const store = createStore(reducers)

 export default store

 export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore - так можем в консоли браузера посмотреть что находится в store
window.store = store // for dev
