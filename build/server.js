'use strict'
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const base = require('./webpack.dev')
const config = require('./config')

base.entry.client = [
  'webpack-dev-server/client',
  base.entry.client
]

const compiler = webpack(base)
const server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})

server.listen(config.port, 'localhost', () => {
console.log(`Listening at http://localhost:${config.port}`)
})
