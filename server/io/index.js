// Dependencies =================================
	var SocketIO = require('socket.io'),
		io_handler;

// IO =================================
	io_handler = function(server) {
		var io = SocketIO.listen(server.listener);
		io.sockets.on('connection', function (socket) {
			console.log('new conn');
			socket.emit({ msg: 'Welcome' });

			socket.on('disconnect', function (event) {
				console.log('disconn');
			});
		});
	};

// Expose Module ================================
	module.exports = io_handler;