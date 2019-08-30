const { environment } = require('@rails/webpacker');
const css = require('./loaders/css')

// bootstrap wtith depensences
const webpack = require('webpack')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

// css-loader
environment.loaders.prepend('css', css)

module.exports = environment
