const { REACT_APP_API_URI } = process.env

const axios = require('axios')

export default class API {
  static async addToWatch(watch) {
    const {
      data: { watchlist }
    } = await axios.post(`${REACT_APP_API_URI}/watchlist/add`, {
      add: watch
    })

    return watchlist
  }

  static async removeFromWatch(id) {
    const {
      data: { watchlist }
    } = await axios.get(`${REACT_APP_API_URI}/watchlist/remove/${id}`)

    return watchlist
  }
}
