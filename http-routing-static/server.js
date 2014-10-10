var http = require('http'),
	fs   = require('fs');


function serveStaticFile(res, path, contentType, responseCode){
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname + path, function(err, data){
		if(err){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('500 - Internal Error!');
		} else {
			res.writeHead(responseCode, {'Content-Type': contentType });
			res.end(data);
		}
	});
}


// Server with routing
http.createServer(function(req,res){
	// normalize the url by removing the query string, optional
	// trailing slash and making it lowercase
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '': 
			// default route
			serveStaticFile(res, '/public/home.html', 'text/html');
			break;
		case '/about':
			// about route
			serveStaticFile(res, '/public/about.html', 'text/html');
			break;
		case '/img/logo.jpg':
			serveStaticFile(res, '/img/logo.png', 'image/png');
			break;
		default: 
			// if no route is found
			serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
			break;
	}
}).listen(4000);

console.log("server started on localhost")