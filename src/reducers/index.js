import { combineReducers } from 'redux'
// import scheduleReducer from './schedule'
import cardTableReducer from './cardTable'
export default combineReducers({
    cardTable: cardTableReducer,
})