require('../../components/contact/contact.tag')

module.exports = function(opts) {
	var tag = this

	tag.on('mount', function() {
		var tag_contact = tag.refs.contact
		if (tag.opts.route.id) {
			var results = api_contacts.get(tag.opts.route.id)			
			$.when(results).done(function (data) {
				tag_contact.opts.data.contact = data
				tag.update()
			})
		} else {
			tag_contact.opts.data.contact = {}
			tag.update()
		}
	})
}
