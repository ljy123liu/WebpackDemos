//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
	entry: {
		bundle: './index'
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	}
}