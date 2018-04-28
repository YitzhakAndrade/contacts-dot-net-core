module.exports = function(opts) {
	var tag = this
	tag.opts.data = tag.opts.data || {}

	tag.on('mount', function() {
		
		// tag.opts.data.contact = 
		// {
		// 	"_id" : "4ab78000bf45d42870615f3e",
		// 	"name" : "Yitzhak Andrade",
		// 	"phones" : [ 
		// 		{
		// 			"label" : "Home",
		// 			"value" : "11 3131-3131"
		// 		}, 
		// 		{
		// 			"label" : "Mobile",
		// 			"value" : "11 99999-9125"
		// 		}
		// 	],
		// 	"emails" : [ 
		// 		{
		// 			"label" : "Personal",
		// 			"value" : "yitzhak@andrade.io"
		// 		}
		// 	]
		// }

		tag.update()
	})
}
