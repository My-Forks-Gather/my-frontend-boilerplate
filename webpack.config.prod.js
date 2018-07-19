const path = require('path')
const PluginCopy = require('copy-webpack-plugin')
const PluginHtml = require('html-webpack-plugin')
const PluginCss = require('mini-css-extract-plugin')

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
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: PluginCss.loader }, 'css-loader']
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
    new PluginCss(),
    new PluginCopy(['public']),
    new PluginHtml({
      minify: true,
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}
