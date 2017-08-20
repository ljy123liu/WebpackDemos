module.exports = {
	entry: {
		bundle: "./index.js"
	},
	output:{
		path : __dirname,
		filename:  '[name].js'
	},
	module: {//在配置文件里添加JSON loader

		//test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
		//loader：loader的名称（必须）
		//include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
		//query：为loaders提供额外的设置选项（可选）

    	loaders: [
      		{
	        	test: /\.json$/,
    	    	loader: "json-loader"//json文件读取
      		},
      		{
       		 	test: /\.css$/,
        		loader: 'style!css'//添加对样式表的处理,感叹号的作用在于使同一文件能够使用不同类型的loader
      		}
    	]
  	},

	devServer: {
   		contentBase: __dirname,//本地服务器所加载的页面所在的目录
    	historyApiFallback: true,//不跳转
    	inline: true//实时刷新
  	} 
}