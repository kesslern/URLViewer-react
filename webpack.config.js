let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')

module.exports = {
  entry: './src/RootApp.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[c|a]ss$/,
        loader: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules/bulma']
          }
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' }
    ])
  ],
  devtool: 'eval-source-map'
}
