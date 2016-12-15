import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	devtool: 'eval-source-map',
	entry: [
		path.resolve(__dirname, 'src/index.js') // Entry
	],
	output: {
		path: path.resolve(__dirname, 'dist'), //output
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({ // Creates root html file
			minify: {
				removeComments: true,
				collapseWhitespace: true
			},
			inject: true
		})
	],
	module: {
		loaders: [ // Helps load/import multiple types of files into browser useable formats
			{
				test: /\.jsx?$/, 
				exclude: /(node_modules|bower_components)/, 
				loaders: ['babel']
			},
			{
				test: /\.css$/, loaders: ['style', 'css?sourceMap']
			}
		]
	}
}