const { redis } = require('../lib')

module.exports = {
  method: 'GET',
  url: '/watchlist',
  async handler(request) {
    const {
      params: { userId = 2207 }
    } = request

    const key = `watchlist-${userId}`

    // get farecards from watchlist
    const data = await redis.get(key)

    if (data) {
      // send response
      return {
        watchlist: data
      }
    }

    // send response
    return {
      watchlist: []
    }
  }
}
