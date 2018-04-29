<contact>

    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-12">
                <a type="button" class="btn btn-default" href="#contacts">
                    <span class="glyphicon glyphicon-arrow-left"></span> Back
                </a>
                <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        <span class="glyphicon glyphicon-plus"></span> New <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a onclick={newPhone}>Phone</a></li>
                        <li><a onclick={newEmail}>E-mail</a></li>
                    </ul>
                </div>
                <div class="btn-group pull-right">
                    <button type="button" class="btn btn-danger" onclick={deleteContact}>
                        <span class="glyphicon glyphicon-trash"></span> Delete contact
                    </button>
                </div>
            </div>
        </div>
    </div>

    <form class="form-horizontal" if={ opts.data.contact }>

        <div class="form-group">
            <div class="col-sm-12">
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-user"></span>
                    </span>
                    <input class="form-control input-lg" placeholder="Name" ref="name" value="{ opts.data.contact.name }" />
                </div>
            </div>
        </div>

        <div class="form-group" each={ phone, i in opts.data.contact.phones }>

            <div class="col-sm-4">                
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-tag"></span>
                    </span>
                    <input class="form-control" placeholder="Label" ref="phoneLabel" value="{ phone.label }" />
                </div>
            </div>

            <div class="col-sm-7">                
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                    </span>
                    <input class="form-control" placeholder="Phone" ref="phoneValue" value="{ phone.value }" />
                </div>
            </div>
            <div class="col-sm-1">
                <button type="button" class="btn btn-sm btn-danger" onclick={removePhone}>
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </div>

        </div>


        <div class="form-group" each={ email, i in opts.data.contact.emails }>

            <div class="col-sm-4">
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-tag" aria-hidden="true"></span>
                    </span>
                    <input class="form-control" placeholder="Label" ref="emailLabel" value="{ email.label }" />
                </div>
            </div>

            <div class="col-sm-7">
                <div class="input-group">
                    <span class="input-group-addon">@</span>
                    <input class="form-control" placeholder="E-mail" ref="emailValue" value="{ email.value }" />
                </div>
            </div>

            <div class="col-sm-1">
                <button type="button" class="btn btn-sm btn-danger" onclick={removeEmail}>
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </div>

        </div>

        <div class="form-group">
            <div class="col-sm-12">
                <button type="button" class="btn btn-lg btn-primary" onclick={saveContact}>
                    <span class="glyphicon glyphicon-ok"></span> Save
                </button>
            </div>
        </div>

    </form>

    <script>        
        require('./contact.js').call(this, this.opts)
    </script>
</contact>