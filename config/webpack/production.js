const environment = require('./environment')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = environment.toWebpackConfig()

