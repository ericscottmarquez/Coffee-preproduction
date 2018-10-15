const environment = require('./environment')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      vue: 'vue/dist/vue.js',
      React: 'react',
      ReactDOM: 'react-dom',
      vue_resource: 'vue-resource/dist/vue-resource',
    }
  }
}

module.exports = environment.toWebpackConfig()

