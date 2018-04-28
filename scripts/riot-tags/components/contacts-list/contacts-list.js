var rest_api_fetcher = require('rest-api-fetcher')

module.exports = function(opts) {
	var tag = this
	tag.opts.data = tag.opts.data || {}

	tag.on('mount', function() {
		tag.opts.data.items = []

		var results = api_contacts.get()
		
		$.when(results).done(function (data) {
			tag.opts.data.items = data
			tag.update()
		})
	})

	tag.on('update', function() {
		
	})
}