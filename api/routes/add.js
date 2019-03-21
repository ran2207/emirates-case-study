const { redis } = require('../lib')

module.exports = {
  method: 'POST',
  url: '/watchlist/add',
  async handler(request) {
    const {
      body: { add }
    } = request

    const { id, userId = 2207 } = add

    const key = `watchlist-${userId}`

    // get farecards from watchlist
    const data = await redis.get(key)

    // return farecards
    if (data) {
      const exist = data.find(d => d.id === id)

      if (exist) {
        return {
          wishlist: data
        }
      }

      await redis.set(key, [add, ...data])

      return {
        wishlist: [add, ...data]
      }
    }

    // add fare card to watchlist
    await redis.set(key, [add])

    return {
      wishlist: [add]
    }
  }
}
