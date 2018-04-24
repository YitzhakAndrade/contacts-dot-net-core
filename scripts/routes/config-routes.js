var rotas_riot = require('./riot-routes')

var rotas = [
	{
		nome: 'schedule',
		tag: require('../riot-tags/routes/schedule/schedule.tag'),
		js: require('../riot-tags/routes/schedule/schedule.js')
	}
]

rotas_riot.criarRotas(rotas)
