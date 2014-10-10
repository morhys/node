var http = require('http');

// Server with routing
http.createServer(function(req,res){
	// normalize the url by removing the query string, optional
	// trailing slash and making it lowercase
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '': 
			// default route
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Homepage');
			break;
		case '/about':
			// about route
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('About');
			break;
		default: 
			// if no route is found
			res.writeHead(404, { 'Content-Type': 'text/plain'});
			res.end('Not Found');
			break;
	}
}).listen(3000);

console.log("server started on localhost")