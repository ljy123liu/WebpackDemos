var path = require('path');
module.exports = {
	entry: {
		bundle: './index'
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	}
}