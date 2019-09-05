const { environment } = require('@rails/webpacker');
const webpack = require('webpack');
const css = require('./loaders/css');
const url = require('./loaders/url');

// bootstrap wtith depensences
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

// css-loader
environment.loaders.prepend('css', css);

// url-loader
environment.loaders.prepend('url', url);

// avoid using both file and url loaders
environment.loaders.get('file').test = /\.eot(\?v=\d+\.\d+\.\d+)?$/

module.exports = environment
