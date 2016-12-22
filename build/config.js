'use strict'

module.exports = {
  port: '9000',
  title: 'laboratory',
  vendor: [
    'underscore'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
