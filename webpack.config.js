const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      src: path.join(__dirname, './src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'react.[name].[chunkhash].js',
    chunkFilename: 'react.[name].[chunkhash].chunk.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
