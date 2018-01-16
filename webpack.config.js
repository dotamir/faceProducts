const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/public/src',
  output: {
    filename: 'index.js',
    path: __dirname + "/public/"
  },
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: __dirname + '/public/src/index.html',
    })
  ]
}