
const path = require('path');
// const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function(env, argv) {
	const devMode = env.development ? true : false;

	return {
		mode: devMode ? 'development' : 'production',
		resolve: {
			extensions: ['.js', '.jsx']
		},
		entry: {
			app: './index.jsx'
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'build')
		},
		devServer: {
			port: 3030,
			hot: true,
			open: true,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime', /* 'react-refresh/babel' */],
						}
					}]
				},
				{
					test: /\.s[ac]ss$/,
					use: [
						devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
						{
							loader: 'css-loader',
							options: { url: false, sourceMap: true } 
						},
						'sass-loader'
					]
				}
			]
		},
		plugins: [
			// new RefreshWebpackPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './index.html',
			}),
			new MiniCssExtractPlugin({ 
				filename: '[name].css',
				chunkFilename: '[id].css'
			})
		]
	}
}