const { country } = require('../lib')

module.exports = {
  method: 'GET',
  url: '/country-code',
  async handler(request) {
    // api call to emirtaes to fetch fare cards by country code
    const codes = await country.code()

    // send response
    return {
      codes
    }
  }
}
