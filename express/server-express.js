var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

// Routes 
// app.get used to method used for adding routes
// app.VERB
// The function provided will get invoked by the route it matches
app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Hello from the Home template');
});

app.get('/about', function(req,res){
	res.type('text/plain');
	res.send('Hello from the About template');
});

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 not found');
});

// custom 500 page
app.use(function(req, res){
	console.log(err.stack);
	res.type('text/plain');
	res.status('500 - Server Error!');
});

app.listen(app.get('port'), function(){
	console.log('Express started on localhost' + app.get('port') + 
				'; press Ctrl-C to terminate.');
});

