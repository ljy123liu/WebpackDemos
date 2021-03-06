
// module.exports = function() {
// 	var obj = new Object();
// 	obj.first = "npm init";
// 	obj.second = "npm --save-dev webpack";
// 	obj.three = "npm script 执行 webpack命令";
// 	return obj;
// }

var config = require('./config.json');

var obj = new Object();
	obj.first = "npm init";
	obj.second = "npm --save-dev webpack(--save-dev 关联package)";
	obj.three = "npm --save-dev webpack-dev-server(本地服务器基于node.js构建,启动命令：webpack-dev-server --inline)";
	obj.four = "npm script 执行 webpack命令";
	obj.five = "npm install --save-dev json-loader(安装可以装换JSON的loader)";
	obj.six = config.greetText;
	obj.seven = "npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react (npm一次性安装多个依赖模块，模块之间用空格隔开)";
module.exports = obj;