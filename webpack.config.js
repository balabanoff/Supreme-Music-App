module.exports = {
  entry:'./index.js',
  output:{
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
      }
    ]
  },
  watch: true
}
