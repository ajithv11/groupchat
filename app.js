var app  		= require('express')();
var server 		= require('http').createServer(app);
var io  		= require('socket.io').listen(server);





var listen = server.listen(3001, function(){
	
});



require('./routes')(app, io);
require('./socket')(app, io);






