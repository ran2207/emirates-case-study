const fare = require('./fare')

module.exports = (fastify, options, next) => {
  fastify.route(fare)

  next()
}
