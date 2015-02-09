// Dependencies =================================
	var Joi = require('joi');

// Routes Object ================================
	var api = {
		index: {
			handler: function(request, reply) {
				request.session.set('example', { key: 'LM' });
				reply('API index');
			}
		}
	}

// Exposing API Routes ========================
	module.exports = api;