// Dependencies =================================
	var requireDirectory 	= require('require-directory');

// Dependencies =================================
	module.exports = function(server) {
		// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
		var controller = requireDirectory(module, server.app.root+'/server/controllers');

		// Array of Routes to pass to Server
		var routes_table = [
			// Public
			{
				method: 'GET',
				path: '/',
				config: controller.public.index
			},

			// Public Assets Route
			{
				method: 'GET',
				path: '/assets/js/{path*}',
				handler: {
					directory: { path: './public/assets/js', listing: false, index: true }
				}
			},
			{
				method: 'GET',
				path: '/assets/{path*}',
				handler: {
					directory: { path: './public/dist/assets/', listing: false, index: true }
				}
			}
		];

		server.route(routes_table);
	};