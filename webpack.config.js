const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function(env, argv){
  return {
    // entry: './src/index.js',
    // contentBase:
    mode: "development", // "development" | "none"
    entry: path.resolve(__dirname,'./src/index.js'),
    output: {
      filename: 'bundle.js',
      // filename: '[name].js'
      path: path.resolve(__dirname, 'dist'),
      // path: path.join(__dirname, 'dist/static'),
      // publicPath: 'static/',
      publicPath: '/assets/',
      libraryTarget: "umd"
    },

    // resolve: {
    //   alias: {
    //     //'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
    //     'jquery-ui': 'jquery-ui/jquery-ui.js',
    //     modules: path.join(__dirname, "node_modules"),
    //   }
    // },

    plugins:[
      new HtmlWebpackPlugin({
        filename: 'intelligence.html',
        template: 'src/intelligence.html',
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],

    watch: true,
    devServer: {
      // proxy: { // proxy URLs to backend development server
      // },
      contentBase: path.join(__dirname, 'dist'),
      // contentBase: path.join(__dirname, 'src'),
      watchContentBase: true,
      // hot: true, use this option at command line. do not use both
      historyApiFallback: true,
      //hot: true,
      //inline: true,
      // compress: true,
      // publicPath: '/assets/',
      port: 8080,
    },

    // importing precompiled sass
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
        // {
        //   test: /\.(scss)$/,
        //   // include: [
        //   //   path.resolve(__dirname, 'node_modules'),
        //   //   path.resolve(__dirname, 'src'),
        //   // ],
        //   use: [{
        //     loader: 'style-loader',// inject CSS to page
        //   },{
        //     loader: 'css-loader', // translate CSS into CommonJS
        //   }, {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: function () {
        //         return [
        //           require('precss'),
        //           require('autoprefixer'),
        //         ];
        //       }
        //     }
        //   },{
        //     loader: 'sass-loader'  // compiles Sass to CSS
        //   }]
        // },
      ]
    },


    // importing compiled css
    // import 'bootstrap/dist/css/bootstrap.min.css
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/,
    //       use: ['style-loader', 'css-loader']
    //     }
    //   ]
    // }

  };
}
