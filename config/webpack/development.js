const environment = require('./environment')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = environment.toWebpackConfig()

