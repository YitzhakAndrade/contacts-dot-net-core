<contact>

    <div class="form-horizontal">
        <div class="form-group col-sm-12" role="group" aria-label="...">
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-plus"></span> New <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="">Phone</a></li>
                    <li><a href="">E-mail</a></li>
                </ul>
            </div>
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash"></span> Delete contact
                </button>
            </div>
        </div>
    </div>

    <form class="form-horizontal" if={ opts.data.contact }>

        <div class="form-group">
            <div class="col-sm-12">
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </span>
                    <input class="form-control input-lg" placeholder="Phone" value="{ opts.data.contact.name }" />
                </div>
            </div>
        </div>

        <div class="form-group" each={ phone in opts.data.contact.phones }>
            
            <div class="col-sm-4">                
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-tag" aria-hidden="true"></span>
                    </span>
                    <input class="form-control" placeholder="Label" value="{ phone.label }" />
                </div>
            </div>

            <div class="col-sm-7">                
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                    </span>
                    <input class="form-control" placeholder="Phone" value="{ phone.value }" />
                </div>
            </div>
            <div class="col-sm-1">
                <button type="button" class="btn btn-sm btn-danger">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </div>

        </div>


        <div class="form-group" each={ email in opts.data.contact.emails }>

            <div class="col-sm-4">
                <div class="input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-tag" aria-hidden="true"></span>
                    </span>
                    <input class="form-control" placeholder="Label" value="{ email.label }" />
                </div>
            </div>

            <div class="col-sm-7">
                <div class="input-group">
                    <span class="input-group-addon">@</span>
                    <input class="form-control" placeholder="E-mail" value="{ email.value }" />
                </div>
            </div>

            <div class="col-sm-1">
                <button type="button" class="btn btn-sm btn-danger">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </div>

        </div>

    </form>


    <script>
        require('./contact.js').call(this, this.opts)
    </script>
</contact>