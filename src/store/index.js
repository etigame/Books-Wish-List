import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import { bookReducer } from './reducers/book.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  bookModule: bookReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
