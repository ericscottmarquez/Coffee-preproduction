// process.env.NODE_ENV = process.env.NODE_ENV || 'production'

// const environment = require('./environment')

// module.exports = environment.toWebpackConfig()


const webpack = require('webpack')
const { basename, dirname, join, relative, resolve } = require('path')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const sharedConfig = require('./shared.js')
const { env, settings, output, loadersDir } = require('./configuration.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = merge(sharedConfig, {
  output: { filename: '[name]-[chunkhash].js' },
  devtool: false,//'source-map',
  stats: 'normal',

  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin({
      filename: '[name]-[hash].css',
      allChunks: true
    }),
    new ManifestPlugin({
      publicPath: output.publicPath,
      writeToFileEmit: true
    })
  ],

  resolve: {
    extensions: settings.extensions,
    modules: [
      resolve(settings.source_path),
      'node_modules'
    ],
    alias: {
     'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
   }
  },

  resolveLoader: {
    modules: ['node_modules']
  }
})