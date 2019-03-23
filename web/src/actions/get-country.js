const { REACT_APP_API_URI } = process.env

const axios = require('axios')

export const GET_COUNTRY_PENDING = 'GET_COUNTRY_PENDING'
export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS'
export const GET_COUNTRY_FAILURE = 'GET_COUINTRY_FAILURE'

export const getCountryPending = () => ({
  type: GET_COUNTRY_PENDING
})

export const getCountrySuccess = codes => ({
  codes,
  type: GET_COUNTRY_SUCCESS
})

export const getCountryFailure = error => ({
  error,
  type: GET_COUNTRY_FAILURE
})

export default () => async dispatch => {
  dispatch(getCountryPending())

  try {
    const {
      data: { codes }
    } = await axios.get(`${REACT_APP_API_URI}/country-code`)
    console.log({ codes })

    dispatch(getCountrySuccess(codes))
  } catch (error) {
    dispatch(getCountryFailure(error))
  }
}
