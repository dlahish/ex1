module.exports = {
    entry: "./src/index.js",
    output: {
        path: './bin',
        filename: "bundle.js"
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: "file"
      }]
    },
    resolve: {
    extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
