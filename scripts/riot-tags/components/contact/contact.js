module.exports = function(opts) {
	var tag = this
	tag.opts.data = tag.opts.data || {}

	tag.newPhone = newPhone
	tag.newEmail = newEmail
	tag.removePhone = removePhone
	tag.removeEmail = removeEmail
	tag.saveContact = saveContact
	tag.deleteContact = deleteContact
	tag.editContact = editContact

	tag.on('mount', function() {
		if ($.isEmptyObject(tag.opts.data.contact)) {
			editContact()
			//$('#btnNewItem').removeClass('hidden')
		}
	})

	function editContact(e) {
		$('input').removeAttr("readonly")
	}

	function newPhone(e) {
		if (!tag.opts.data.contact.phones) {
			tag.opts.data.contact.phones = []
		}
		
		tag.opts.data.contact.phones.push({ label: '', value: ''})
	}

	function newEmail(e) {
		if (!tag.opts.data.contact.emails) {
			tag.opts.data.contact.emails = []
		}

		tag.opts.data.contact.emails.push({ label: '', value: ''})
	}

	function removePhone(e) {
		var index = e.item.i
		tag.opts.data.contact.phones.splice(index, 1)
	}

	function removeEmail(e) {
		var index = e.item.i
		tag.opts.data.contact.emails.splice(index, 1)
	}

	function deleteContact (e) {

		if (!tag.opts.data.contact.mongoId) {
			window.location = '#contacts'
			return
		}

		var url = window.location.origin + '/api/contacts/' + tag.opts.data.contact.mongoId
		
		$.ajax({
			method: "DELETE",
			url: url
		}).done(function() {
			toastr.success('Done!')
			window.location = '#contacts'
		})
	}

	function saveContact(e) {
		
		tag.opts.data.contact.name = tag.refs.name.value

		if (tag.refs.phoneLabel && tag.refs.phoneLabel.length > 0) {
			tag.opts.data.contact.phones = []
			tag.refs.phoneLabel.forEach(function(el, ix) {
				var value = tag.refs.phoneValue[ix].value
				tag.opts.data.contact.phones.push({ 'label': el.value, 'value':  value})
			})
		} else if (tag.refs.phoneLabel) {
			tag.opts.data.contact.phones = [
				{ 'label': tag.refs.phoneLabel.value, 'value':  tag.refs.phoneValue.value }
			]
		} else {
			delete tag.opts.data.contact.phones
		}

		if (tag.refs.emailLabel && tag.refs.emailLabel.length > 0) {
			tag.opts.data.contact.emails = []
			tag.refs.emailLabel.forEach(function(el, ix) {
				var value = tag.refs.emailValue[ix].value
				tag.opts.data.contact.emails.push({ 'label': el.value, 'value':  value})
			})
		} else if (tag.refs.emailLabel) {
			tag.opts.data.contact.emails = [
				{ 'label': tag.refs.emailLabel.value, 'value':  tag.refs.emailValue.value }
			]
		} else {
			delete tag.opts.data.contact.emails
		}

		var url = window.location.origin + '/api/contacts'
		$.ajax({
			method: "POST",
			url: url,			
			data: JSON.stringify(tag.opts.data.contact),
			contentType: 'application/json'
		}).done(function() {
			toastr.success('Done!')
		})
	}
}
