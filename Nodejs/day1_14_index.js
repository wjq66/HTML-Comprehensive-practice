var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname == "/"){
		pathname == "index.html";
	}
	fs.readFile("./static/" + pathname,function(err,data){
		if(err){
			fs.readFile("./static/404.html",function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			});
			return;
		};
		res.end(data);
	})
}).listen(3000,"127.0.0.1");



















