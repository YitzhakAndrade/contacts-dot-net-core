require('../../components/contact/contact.tag')

module.exports = function(opts) {
	tag = this

	tag.on('mount', function() {
		
		var results = api_contacts.get(tag.opts.route.id)
		
		$.when(results).done(function (data) {
			var tag_contact = tag.refs.contact
			tag_contact.opts.data.contact = data
			tag.update()
		})
	})
}
