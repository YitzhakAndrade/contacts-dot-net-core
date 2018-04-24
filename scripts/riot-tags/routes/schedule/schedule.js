module.exports = function(opts) {
	tag = this

	tag.on('mount', function() {
		$('#calendar').fullCalendar({
            // put your options and callbacks here
        })
	})
}
