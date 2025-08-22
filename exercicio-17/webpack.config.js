const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}