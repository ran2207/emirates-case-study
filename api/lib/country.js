const { COUNTRY_CODE_API_URI } = process.env

const axios = require('axios')

class Country {
  static async code() {
    // fetch fares from emirates
    const codes = (await axios
      .get(`${COUNTRY_CODE_API_URI}`)
      .then(({ data }) => data)).map(({ name, alpha2Code, alpha3Code }) => {
      return {
        name: `${name} (${alpha3Code})`,
        code: alpha2Code.toLowerCase()
      }
    })

    return codes
  }
}

module.exports = Country
