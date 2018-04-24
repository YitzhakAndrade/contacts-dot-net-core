var riot = require('riot')
var route_riot = require('riot-route')

var home_page = require('../riot-tags/routes/home.tag')
var not_found_page = require('../riot-tags/routes/not-found-page.tag')
var routes = {}
var rotaAtual = null

routes.home = function(id, action) {
	montar(home_page)
}

function montar(tag, options) {
    rotaAtual && rotaAtual.unmount(true)
    rotaAtual = riot.mount('#content', tag, options)[0]
    
    //var tag_loading = require('../../Content/tags/componentes/loading.tag')
    //riot.mount('.ajax-loading', tag_loading)
}

function handler(collection, id, action) {
    var fnRota = routes[collection || home_page]
    fnRota ? fnRota(id, action) : montar(not_found_page)
}

route_riot(handler)
route_riot.start(true)

function criarRota(tag) {
	return function(id, action) {
		query = route_riot.query()
		var options = { 
			rota: { 
				collection: tag,
				id: id,
				action: action,
				query: query
			} 
		}
		montar(tag, options)
	}
}

function criarRotas(rotas) {
	rotas.forEach(function(val, ix, arr) {
		routes[val.nome] = criarRota(val.tag)
	})
}

module.exports = {
	rotaAtual: rotaAtual,
	criarRota: criarRota,
	criarRotas: criarRotas
}