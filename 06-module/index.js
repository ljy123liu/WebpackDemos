var two = require("./two");
import './main.css';//使用require导入css文件

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


