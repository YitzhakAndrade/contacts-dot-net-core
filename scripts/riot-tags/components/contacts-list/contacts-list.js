module.exports = function(opts) {
	var tag = this
	tag.opts.data = tag.opts.data || {}

	tag.on('mount', function() {
		tag.opts.data.items = []

		$.when(api_contacts.get()).done(function (data) {
			tag.opts.data.items = data
			tag.update()
		})
	})
}