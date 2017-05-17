var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
	var userurl = req.url;
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	
	if(userurl.substr(0,9) == "/student/"){
		var studentid = userurl.substr(9);
		console.log(studentid);
		if(/\d{10}/.test(studentid)){
			res.end("学生id为"+studentid);
		}else{
			res.end("学号位数不对");
		}
	}else if(userurl.substr(0,9) == "/teacher/"){
		var teacherid = userurl.substr(9);
		if(/\d{6}/.test(teacherid)){
			res.end("您要查询的老师id为"+teacherid);
		}else{
			res.end("工号位数不对");
		}
	}
})
server.listen(3000,"127.0.0.1");











