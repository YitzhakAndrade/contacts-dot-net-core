$ = jQuery = require("jquery")
require('bootstrap')
//require('jquery-mask-plugin')
//require('bootstrap-datepicker')
//BootstrapDialog = require('bootstrap3-dialog')
//moment = require('moment')
//toastr = require('toastr')

require('./routes/config-routes')

api_contacts = require('./api-contacts/api.js')

$(function () {
	var riot = require('riot')
	//var tagAppVersion = require('../riot-tags/components/app-version/app-version.tag')
    //riot.mount('#divAppVersion', tagAppVersion)
    //var tag_contacts_list = require('./riot-tags/components/contacts-list/contacts-list.tag')
    //riot.mount('contacts-list')
    //riot.mount('#montaqui', tag_contacts_list)
})

/*toastr.options = {
    positionClass: "toast-top-right",
    showDuration: 300,
    hideDuration: 300,
    timeOut: 5000,
    extendedTimeOut: 5000,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
}*/