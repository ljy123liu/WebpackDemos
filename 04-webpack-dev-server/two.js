
// module.exports = function() {
// 	var obj = new Object();
// 	obj.first = "npm init";
// 	obj.second = "npm --save-dev webpack";
// 	obj.three = "npm script 执行 webpack命令";
// 	return obj;
// }

var obj = new Object();
	obj.first = "npm init";
	obj.second = "npm --save-dev webpack(--save-dev 关联package)";
	obj.three = "npm --save-dev webpack-dev-server(本地服务器基于node.js构建,启动命令：webpack-dev-server --inline)";
	obj.four = "npm script 执行 webpack命令";
module.exports = obj;