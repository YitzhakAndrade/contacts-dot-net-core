<contacts-list>
    <h3>Lista de Contatos</h3>


    <p each={ contact in opts.data.items }>
        { contact.name }
    </p>
    
    <script>
        require('./contacts-list.js').call(this, this.opts)
    </script>
</contacts-list>