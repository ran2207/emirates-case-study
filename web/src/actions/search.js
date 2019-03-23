const { REACT_APP_API_URI } = process.env

const axios = require('axios')

export const SEARCH_INITIAL = 'SEARCH_INITIAL'
export const SEARCH_PENDING = 'SEARCH_PENDING'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export const searchInitial = () => ({
  type: SEARCH_INITIAL
})

export const searchPending = () => ({
  type: SEARCH_PENDING
})

export const searchSuccess = results => ({
  results,
  type: SEARCH_SUCCESS
})

export const searchFailure = error => ({
  error,
  type: SEARCH_FAILURE
})

export default country => async dispatch => {
  dispatch(searchPending())

  try {
    const {
      data: { fares }
    } = await axios.get(`${REACT_APP_API_URI}/${country}/fares`)

    dispatch(searchSuccess(fares))
  } catch (error) {
    dispatch(searchFailure(error))
  }
}
