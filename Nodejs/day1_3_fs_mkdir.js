var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	/*创建文件夹fs.mkdir()*/
	/*fs.mkdir("./Nodejs/aaa",function(){
		console.log("yes");
	});*/
	/*删除文件夹*/
	/*fs.rmdir(path,callback);*/
	/*判断是不是一个文件夹*/
	fs.stat("./css",function(err,data){
		console.log("111");
		console.log(data.isDirectory());
	});
});

server.listen(3000,"127.0.0.1");