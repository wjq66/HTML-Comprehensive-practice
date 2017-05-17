var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	/*读取一个文件并不会影响执行其他的操作，不会等待*/
	var userid = parseInt(Math.random() * 89999)+10000;
	if(req.url == "/favicon.ico"){
		return;
	}
	console.log("欢迎"+ userid);
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	fs.readFile("./web/day1_2.html",function(err,data){
		if(err){
			throw err;
		}
		console.log(userid+"执行完毕");
		res.end(data);
	});
});
server.listen(3000,"127.0.0.1");
