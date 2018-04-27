<contacts-list>
    <h3>Contacts List</h3>

    <div class="list-group">
		<a each={ contact in opts.data.items } class="list-group-item" href="#contacts/{ contact._id }">
			{ contact.name }
		</a>
	</div>
    
    <script>
        require('./contacts-list.js').call(this, this.opts)
    </script>
</contacts-list>