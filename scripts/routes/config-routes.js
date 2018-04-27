var rotas_riot = require('./riot-routes')

var rotas = [
	{
		nome: 'contacts',
		tag: require('../riot-tags/routes/page-contacts/page-contacts.tag'),
		js: require('../riot-tags/routes/page-contacts/page-contacts.js')
	}
]

rotas_riot.criarRotas(rotas)
