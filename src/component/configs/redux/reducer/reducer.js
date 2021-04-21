import { combineReducers } from 'redux'
import transactionReducer from './transactionReducer'
import userReducer from './userReducer'
import movieReducer from './movieReducer'
import providerReducer from './providerReducer'

const rootReducer = combineReducers(
  {
    transaction: transactionReducer,
    user: userReducer,
    movie: movieReducer,
    provider: providerReducer
  }
)

export default rootReducer
