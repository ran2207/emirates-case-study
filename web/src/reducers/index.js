import { combineReducers } from 'redux'

import countries from './countries'
import results from './results'
import watchlist from './watchlist'

export default combineReducers({
  countries,
  results,
  watchlist
})
