var path = require('path');
module.exports = {
  entry: {
  	bundle:"./index",
  	test:"./next"
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
}

//命令行： webpack-dev-server
//localhost:8080