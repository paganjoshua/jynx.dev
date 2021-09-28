const path = require('path')
const isDev = process.env.NODE_ENV === 'development' ? true : false;
const { HotModuleReplacementPlugin } = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
    
	},
	mode: process.env.NODE_ENV,
  devServer: {
    //contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: 'only',
    port: 5001,
    proxy: {
      '/css': 'http://localhost:3000'
    },
    static: './dist'
  },
  plugins: [
    isDev && new HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'dev.html'),
    })
  ].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 
            {
              loader: 'babel-loader',
              options: {
                plugins: [isDev && require('react-refresh/babel')].filter(Boolean)
              }
            }
          ]
        },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
		]
	}
}
