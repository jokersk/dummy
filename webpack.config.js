const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: { main: './src/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd',
      library: 'situ-test'
    },
    module: {
        rules: [
          { test: /.vue$/, use: 'vue-loader' },
          { test: /\.css$/, use: ["vue-style-loader", "css-loader"]},
          { test: /\.scss$/, use: ["vue-style-loader", "css-loader", "sass-loader"] },
          {test: /\.js$/, loader: 'babel-loader' },
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            enforce: 'pre',
            loader: 'tslint-loader'
          },
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
         'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
  };