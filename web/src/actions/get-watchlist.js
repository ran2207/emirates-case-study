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

export default (watch, type) => async dispatch => {
  console.log({ watch, type })
  console.log('called')
  dispatch(watchPending())

  try {
    if (type === 'add') {
      const {
        data: { watchlist }
      } = await axios.post(`${REACT_APP_API_URI}/watchlist/add`, {
        add: watch
      })

      dispatch(watchSuccess(watchlist))
    } else if (type === 'remove') {
      const { id } = watch

      const {
        data: { watchlist }
      } = await axios.get(`${REACT_APP_API_URI}/watchlist/remove/${id}`)

      dispatch(watchSuccess(watchlist))
    } else {
      const {
        data: { watchlist }
      } = await axios.get(`${REACT_APP_API_URI}/watchlist`)

      dispatch(watchSuccess(watchlist))
    }
  } catch (error) {
    dispatch(watchFailure(error))
  }
}
