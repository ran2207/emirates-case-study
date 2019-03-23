import {
  WATCH_INITIAL,
  WATCH_PENDING,
  WATCH_SUCCESS,
  WATCH_FAILURE
} from '../actions/get-watchlist'

const initial = {
  watchlist: [],
  error: null,
  loading: false
}

export default (state = initial, { type, watchlist, error }) => {
  switch (type) {
    case WATCH_INITIAL:
      return {
        ...state,
        error: null,
        loading: false,
        watchlist: []
      }

    case WATCH_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case WATCH_SUCCESS:
      return {
        ...state,
        watchlist,
        loading: false
      }

    case WATCH_FAILURE:
      return {
        ...state,
        error,
        loading: false,
        watchlist: []
      }

    default:
      return state
  }
}
