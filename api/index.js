const { PORT } = process.env

const cors = require('cors')
const fastify = require('fastify')

const server = fastify()

server.use(cors())

const routes = require('./routes')

server.register(routes, {
  prefix: 'api'
})

server.listen(PORT, '0.0.0.0', err => {
  if (err) {
    throw err
  }
})

module.exports = server
