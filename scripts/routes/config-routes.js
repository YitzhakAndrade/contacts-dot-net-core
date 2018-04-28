var riot_routes = require('./riot-routes')

var routes = [
	{
		id: 'contacts',
		tag: require('../riot-tags/routes/page-contacts/page-contacts.tag'),
		js: require('../riot-tags/routes/page-contacts/page-contacts.js')
	},
	{
		id: 'contact-details',
		tag: require('../riot-tags/routes/page-contact-details/page-contact-details.tag'),
		js: require('../riot-tags/routes/page-contact-details/page-contact-details.js')
	}
]

riot_routes.createRoutes(routes)
