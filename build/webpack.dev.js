'use strict'

const webpack = require('webpack')

const base = require('./webpack.base')
const config = require('./config')

base.devtool = 'eval-source-map'
base.output.publicPath = '/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

base.module.rules.push({
  test:    /\.elm$/,
  loader:  'elm-hot-loader!elm-webpack-loader?verbose=true&warn=true&debug=true',
  exclude: [/elm-stuff/, /node_modules/]
})
base.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
})

module.exports = base