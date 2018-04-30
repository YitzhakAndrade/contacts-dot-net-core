<contacts>
    <h2>Contacts</h2>
	<hr />

    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-12">
                <a class="btn btn-default" href="#contact-details">
                    <span class="glyphicon glyphicon-plus"></span> New Contact
                </a>
            </div>
        </div>
    </div>

    <contacts-list />

    <script>
        require('./page-contacts.js').call(this, this.opts)
    </script>
</contacts>