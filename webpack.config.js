const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/client/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      filename: 'index.html',
      template: './src/client/index.html',
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
