var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path : './build',
		filename : 'bundle.js'
	},
	resolve: {
		root: [
			path.resolve('./src'),	// includes this in the path in "import from 'drsLib/drsAppCtrl', avoiding '../..'
		]
		/* ,extensions : ['','.js', '.jsx'] */   // parecia buena idea, funciona para loquesea/modulo, pero no para ./modulo, así que es un lio, todo con .js y tomar polsaco
	},
	devServer: {
		contentBase: "./src",			// web root folder, where index.html is
		inline : true,
		port : 3333
	},
	module : {
		loaders : [
			{
				test : /\.jsx?$/,			// transforms both .js and .jsx
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

