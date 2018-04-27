var riot = require('riot')

module.exports = function(opts) {
	var tag = this

	tag.on('mount', function() {
        $(function () {
            //var tagAppVersion = require('../riot-tags/components/app-version/app-version.tag')
            //riot.mount('#divAppVersion', tagAppVersion)
            //riot.mount('contacts-list')
            //riot.mount('#montaqui', tag_contacts_list)
        })
    })
    
    
    
}
