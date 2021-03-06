var webpack = require('webpack');
var path = require('path');
 
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: "var",
    library: 'Bundle'
  },
  devtool: 'inline-source-map',
  module: {
    noParse: [/autoit\.js$/],
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: 'es2015',
        },
      },
      {
        test: path.join(__dirname, 'test'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: 'es2015',
        },
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  }
};
