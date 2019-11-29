import { createStore } from 'redux'
import rootReducer from '../reducers'

export default store = createStore(rootReducer)  //rootReducer is the root file of all reducers, e.g., combined reducers into one rootReducer
