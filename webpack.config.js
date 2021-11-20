module.exports = {
  output: {
    publicPath: 'C://Users//doohe',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]',
            },
          },
        ],
      },
    ],
  },
};
