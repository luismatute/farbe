// Dependencies =================================

// Routes Object ================================
	var public_ctrl = {
		index: {
			handler: function(request, reply) {
                var root = request.server.app.root;
                var env  = request.server.app.env.name;
				// reply.file(root + '/public/' + env + '/index.html');
				reply.file(root + '/public/index.html');
			}
		}
	}

// Exposing Public Routes ========================
	module.exports = public_ctrl;