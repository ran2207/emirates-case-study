const { emirates } = require('../lib')

module.exports = {
  method: 'GET',
  url: '/:countryCode/fares',
  async handler(request) {
    const {
      params: { countryCode }
    } = request

    // api call to emirtaes to fetch fare cards by country code
    const fares = await emirates.fares(countryCode)

    // send response
    return {
      fares
    }
  }
}
