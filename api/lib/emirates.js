const { EMIRATES_API_URI } = process.env

const axios = require('axios')

class Emirates {
  static async fares(countryCode) {
    // fetch fares from emirates
    const fares = await axios
      .get(`${EMIRATES_API_URI}/api/en-${countryCode}/fares`)
      .then(
        ({
          data: {
            farecards: { cards }
          }
        }) => cards
      )

    return fares
  }
}

module.exports = Emirates
