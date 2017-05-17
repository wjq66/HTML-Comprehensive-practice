var http = require("http");
var fs = require("fs");

/*找出一个文件里面的所有文件夹*/
var server = http.createServer(function(req,res){
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	/*遍历img里面的所有文件，文件夹*/
	fs.readdir("./img",function(err,files){
		var wenjianjia = [];
		/*创建匿名函数，立即执行*/
		(function iterator(i){
			/*遍历结束*/
			if(i == files.length){
				console.log(wenjianjia);
				return;
			}
			/*fa.stat判断是不是一个文件夹*/
			fs.stat("./img/"+files[i],function(err,stats){
				if(stats.isDirectory()){
					wenjianjia.push(files[i]);
				}
				iterator(i+1);
			});
		})(0);
	});
	
	res.end();
});

server.listen(3000,"127.0.0.1");