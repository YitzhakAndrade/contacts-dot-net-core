var rest_api_fetcher = require('rest-api-fetcher')

var url = window.location.origin + '/api'
var routes = ['contacts']
var api_contacts = rest_api_fetcher.createRoute(url, routes)

module.exports = api_contacts
