const path = require('path');
const webpack = require('webpack');
const styleLintPlugin = require('stylelint-webpack-plugin');
const ENV = process.env.NODE_ENV;

const jsPlugin = ENV === 'production' ?
  new webpack.optimize.UglifyJsPlugin({ minimize: true })
  : new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: (ENV === 'production' ?
    ['./src/main']
    :
    [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/main.js'
    ]
  ),
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loaders: ['babel'],
        include: __dirname,
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
    ]
  },
  postcss: function () {
    return [
      require('postcss-import')({
        path: path.join(__dirname, 'src'),
        addDependencyTo: webpack // for hot-reloading
      }),
      require('postcss-cssnext')({
        browsers: ['> 1%', 'last 2 versions']
      }),
      require('postcss-reporter')({ clearMessages: true }),
      require('postcss-custom-media')()
    ];
  },
  plugins: [
    new styleLintPlugin({
      configFile: path.join(__dirname, '.stylelintrc'),
      context: path.join(__dirname, 'src'),
      files: '**/*.?(sa|sc|c)ss'
    }),
    jsPlugin
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};
