var riot = require('riot')
var route_riot = require('riot-route')

var home_page = require('../riot-tags/routes/home.tag')
var not_found_page = require('../riot-tags/routes/not-found-page.tag')
var routes = {}
var currentRoute = null

routes.home = function(id, action) {
    mountRoute(home_page)
}

function mountRoute(tag, options) {
    currentRoute && currentRoute.unmount(true)
    currentRoute = riot.mount('#content', tag, options)[0]

    //var tag_loading = require('../../content/tags/components/loading.tag')
    //riot.mount('.ajax-loading', tag_loading)
}

function handler(collection, id, action) {
    var fnRoute = routes[collection || home_page]
    fnRoute ? fnRoute(id, action) : mountRoute(not_found_page)
}

route_riot(handler)
route_riot.start(true)

function createRoute(tag) {
    return function(id, action) {
        query = route_riot.query()
        var options = {
            route: {
                collection: tag,
                id: id,
                action: action,
                query: query
            }
        }
        mountRoute(tag, options)
    }
}

function createRoutes(rotas) {
    rotas.forEach(function(val, ix, arr) {
        routes[val.id] = createRoute(val.tag)
    })
}

module.exports = {
    currentRoute: currentRoute,
    createRoute: createRoute,
    createRoutes: createRoutes
}