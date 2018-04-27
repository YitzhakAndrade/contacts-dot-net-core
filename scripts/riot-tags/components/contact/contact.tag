<contact>
    <div if={ opts.data.contact }>
        Phones:
        <p each={ phone in opts.data.contact.phones }>
            { phone.value }
        </p>
        E-mails:
        <p each={ email in opts.data.contact.emails }>
            { email.value }
        </p>
    </div>
    <script>
        require('./contact.js').call(this, this.opts)
    </script>
</contact>