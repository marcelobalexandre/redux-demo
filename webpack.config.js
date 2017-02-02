var path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  resolve: {
   extensions: ['.js']
 },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader?modules,localIdentName=[path][name]--[local]--[hash:base64:5]'
      }
    ]
  }
}
