const { redis } = require('../lib')

module.exports = {
  method: 'POST',
  url: '/watchlist/add',
  async handler(request) {
    const {
      body: { add }
    } = request

    const { id, userId = 2200 } = add

    const key = `watchlist-${userId}`

    // get farecards from watchlist
    const data = await redis.get(key)

    // return farecards
    if (data) {
      // find if id of farecard exists
      const exist = data.find(d => d.id === id)

      // if farecard exists
      if (exist) {
        return {
          watchlist: data
        }
      }

      // else update watchlist with new farecard
      await redis.set(key, [add, ...data])

      // send response
      return {
        watchlist: [add, ...data]
      }
    }

    // add fare card to watchlist
    await redis.set(key, [add])

    return {
      watchlist: [add]
    }
  }
}
