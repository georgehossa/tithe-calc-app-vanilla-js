const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './app/js/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: false } }],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {},
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Tithe Calc App',
      template: './app/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin([
      {
        from: './app/img',
        to: 'img',
      },
    ]),
    new Dotenv(),
  ],
};
