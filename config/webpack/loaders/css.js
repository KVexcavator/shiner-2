module.exports = {
  test: /\.css$/i,
  use: [{
    loader: 'style-loader!css-loader'
  }]
}