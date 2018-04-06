var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		'postal-codes': __dirname + '/postal-codes.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		library: 'postal-codes-js',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader',
				type: 'javascript/auto',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};

if (process.env.NODE_ENV === 'production') {
	module.exports.mode = 'production';
	module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		}),
	]);
}
