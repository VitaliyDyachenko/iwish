module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.svg$/, include: [/react-images-upload/],
          loader: 'file-loader',
          options: {
              name: '[name].[ext]?[hash]'
          }}
      ]
    }
  }