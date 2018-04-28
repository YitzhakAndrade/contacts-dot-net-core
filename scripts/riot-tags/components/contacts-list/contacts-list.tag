<contacts-list>
    <div class="list-group">
		<a each={ contact in opts.data.items } class="list-group-item" href="#contact-details/{ contact.mongoId }">
			{ contact.name }
		</a>
	</div>
    
    <script>
        require('./contacts-list.js').call(this, this.opts)
    </script>
</contacts-list>