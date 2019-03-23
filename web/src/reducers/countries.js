import {
  GET_COUNTRY_PENDING,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAILURE
} from '../actions/get-country'

const initialState = {
  codes: [],
  error: null,
  loading: false
}

export default (state = initialState, { codes, error, type }) => {
  switch (type) {
    case GET_COUNTRY_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }

    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        codes,
        loading: false
      }

    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        error,
        loading: false
      }

    default:
      return state
  }
}
