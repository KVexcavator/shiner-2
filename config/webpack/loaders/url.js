module.exports = {
  rules: [
    {
      test: /\.(woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 5000,
        },
    },
      ]
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            mimetype: 'application/octet-stream',
            limit: 10000,
          },
        },
      ]
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            mimetype: 'image/svg+xml',
            limit: 10000,
          },
        },
      ]
    }
  ]
}