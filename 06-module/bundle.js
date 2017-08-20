/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var two = __webpack_require__(1);
document.write("webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。");
document.write("<br>");
document.write("npm install --save-dev style-loader css-loader");
document.write("<br>");
document.write(two.second);
document.write("<br>");
document.write(two.three);
document.write("<br>");
document.write(two.four);
document.write("<br>");
document.write(two.five);
document.write("<br>");
document.write(two.six);




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


// module.exports = function() {
// 	var obj = new Object();
// 	obj.first = "npm init";
// 	obj.second = "npm --save-dev webpack";
// 	obj.three = "npm script 执行 webpack命令";
// 	return obj;
// }

var config = __webpack_require__(2);

var obj = new Object();
	obj.first = "npm init";
	obj.second = "npm --save-dev webpack(--save-dev 关联package)";
	obj.three = "npm --save-dev webpack-dev-server(本地服务器基于node.js构建,启动命令：webpack-dev-server --inline)";
	obj.four = "npm script 执行 webpack命令";
	obj.five = "npm install --save-dev json-loader(安装可以装换JSON的loader)";
	obj.six = config.greetText;
module.exports = obj;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"greetText": "Hi there and greetings from JSON!"
};

/***/ })
/******/ ]);