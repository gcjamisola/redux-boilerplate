const path = require('path');

const pathSetting = {
  'join': path.join(__dirname, 'dist'),
  'resolve': path.resolve(__dirname, 'dist')
};

const config = {
    devServer: {
        contentBase: pathSetting['join'],
        compress: true,
        port: 9000
    },

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: pathSetting['resolve']
    },

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
};

module.exports = config;