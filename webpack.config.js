const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query:
            {
                presets:['env', 'react']
            }
        }]
    },
	resolve: {
		extensions : [ ".js", ".jsx" ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
