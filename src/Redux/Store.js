import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import SelectReducer from './SelectRedux/SelectReducer'
import SeatReducer from './StateRedux/SeatsReducer'


const rootReducer = combineReducers({
    SRFromStore : SeatReducer,
    BookingfromStore : SelectReducer
})






export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
