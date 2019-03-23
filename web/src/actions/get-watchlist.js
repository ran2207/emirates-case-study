const { REACT_APP_API_URI } = process.env

const axios = require('axios')

export const WATCH_INITIAL = 'WATCH_INITIAL'
export const WATCH_PENDING = 'WATCH_PENDING'
export const WATCH_SUCCESS = 'WATCH_SUCCESS'
export const WATCH_FAILURE = 'WATCH_FAILURE'

export const watchInitial = () => ({
  type: WATCH_INITIAL
})

export const watchPending = () => ({
  type: WATCH_PENDING
})

export const watchSuccess = watchlist => ({
  watchlist,
  type: WATCH_SUCCESS
})

export const watchFailure = error => ({
  error,
  type: WATCH_FAILURE
})

export default () => async dispatch => {
  dispatch(watchPending())

  try {
    const {
      data: { watchlist }
    } = await axios.get(`${REACT_APP_API_URI}/watchlist`)

    console.log({ watchlist })

    dispatch(watchSuccess(watchlist))
  } catch (error) {
    dispatch(watchFailure(error))
  }
}
