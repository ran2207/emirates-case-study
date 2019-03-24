const { redis } = require('../lib')

module.exports = {
  method: 'GET',
  url: '/watchlist/remove/:id',
  async handler(request) {
    const {
      params: { id, userId = 2200 }
    } = request

    const key = `watchlist-${userId}`

    // get farecards from watchlist
    const data = await redis.get(key)

    if (data) {
      // remove farecard by filtering the id to be removed
      const farecards = data.filter(d => d.id !== id)

      // update watchlist after removing the farecard
      await redis.set(key, farecards)

      // send response
      return {
        watchlist: farecards
      }
    }

    // send response
    return {
      watchlist: []
    }
  }
}
