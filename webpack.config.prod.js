const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractCSSPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [ExtractCSSPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|otf|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  plugins: [
    new ExtractCSSPlugin(),
    new CopyPlugin(['public']),
    new HTMLPlugin({
      minify: true,
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}
