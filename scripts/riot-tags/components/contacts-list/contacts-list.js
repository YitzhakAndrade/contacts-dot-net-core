module.exports = function(opts) {
	var tag = this
	tag.opts.data = tag.opts.data || {}

	tag.on('mount', function() {
		tag.opts.data.items = []

		tag.opts.data.items = [
			{
				"_id" : "4ab78000bf45d42870615f3e",
				"name" : "Yitzhak Andrade",
				"phones" : [ 
					{
						"label" : "Home",
						"value" : "11 3131-3131"
					}, 
					{
						"label" : "Mobile",
						"value" : "11 99999-9125"
					}
				],
				"emails" : [ 
					{
						"label" : "Personal",
						"value" : "yitzhak@andrade.io"
					}
				]
			},
			{
				"_id" : "5ae26000bf45d42870615f3e",
				"name" : "John Snow",
				"phones" : [ 
					{
						"label" : "Work",
						"value" : "11 1111-9876"
					}, 
					{
						"label" : "Mobile",
						"value" : "12 98888-9125"
					}
				],
				"emails" : [ 
					{
						"label" : "Personal",
						"value" : "john@snow.old"
					}
				]
			}
		]

		tag.update()
	})

	tag.on('update', function() {
		tag.opts.data.items.forEach(function(val, ix, arr) {
			
		})
	})
}