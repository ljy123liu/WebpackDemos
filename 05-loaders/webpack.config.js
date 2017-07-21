module.exports = {
	entry: {
		bundle: "./index.js"
	},
	output:{
		path : __dirname,
		filename:  '[name].js'
	},
	module: {//在配置文件里添加JSON loader
    	loaders: [
      	{
	        test: /\.json$/,
    	    loader: "json-loader"
      	}
    	]
  	},

	devServer: {
   		contentBase: __dirname,//本地服务器所加载的页面所在的目录
    	historyApiFallback: true,//不跳转
    	inline: true//实时刷新
  	} 
}