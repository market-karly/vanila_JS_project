const path = require('path');

module.exports ={
  mode: 'development',
  entry: './client/js/main.js',
  output: {
    path:path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        include:[path.resolve(__dirname, 'src/js')],
        exclude:/(node_modules)|(dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool:'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  experiments: {
    topLevelAwait: true,
  }
};