<contact>
    <div if={ opts.data.contact }>

        <div class="row">
            <div class="col-sm-6">
                <label for="firstName">Name</label>
                { opts.data.contact.name }

                Phones:
                <p each={ phone in opts.data.contact.phones }>
                    { phone.value }
                </p>
                E-mails:
                <p each={ email in opts.data.contact.emails }>
                    { email.value }
                </p>

            </div>

        </div>

    </div>
    <script>
        require('./contact.js').call(this, this.opts)
    </script>
</contact>