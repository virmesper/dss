// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')
//const fetch = require('node-fetch')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/'
})

fastify.register(require('./routes'), {
  message: "hello"
})

// fastify.register(require('fastify-redis'), { url: constants.redisUrl, /* other redis options */ })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080, "0.0.0.0")
    fastify.log.info(`server listening on ${fastify.server.address().port}`)

  } catch (error) {
    fastify.log.error(error)
    //process.exit(1)
  }
}
start()
