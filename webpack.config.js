module.exports = {
	entry: './main.js',
	output: {
		path : './',
		filename : 'index.js'
	},
	devServer: {
		inline : true,
		port : 3333
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					plugins: ['transform-decorators-legacy' ],
					presets : ['es2015', 'stage-0', 'react']
				}
			}
		]
	}
}

