//require表示引包，引包就是引用自己的一个特殊功能
var http = require("http");
var fs = require("fs");

//创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req,res){
	if(req.url == "/fang"){
		fs.readFile("./day1_1_luyou/day1_1_one.html",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/yuan"){
		fs.readFile("./day1_1_luyou/day1_1_two.html",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/2005.jpg"){
		fs.readFile("./day1_1_luyou/2005.jpg",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"image/jpg"});
			res.end(data);
		});
	}else if(req.url == "/day1_1_luyou.css"){
		fs.readFile("./day1_1_luyou/day1_1_luyou.css",function(err,data){
			//req表示请求，request;  res表示响应，response
			//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
			res.writeHead(200,{"Content-type":"text/css"});
			res.end(data);
		});
	}else{
		res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
		res.end("嘻嘻，没有这个页面呦");
	}
});

//运行服务器，监听3000端口（端口号可以任改）
server.listen(3333,"127.0.0.1");