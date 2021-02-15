import {combineReducers} from 'redux'
import wishlistReducer from './wishlistReducer'
import productsReducer from './productsReducer'
export default combineReducers({wishlistReducer, productsReducer})