const add = require('./add')
const codes = require('./country-code')
const fare = require('./fare')
const remove = require('./remove')

module.exports = (fastify, options, next) => {
  fastify.route(add)
  fastify.route(codes)
  fastify.route(fare)
  fastify.route(remove)

  next()
}
