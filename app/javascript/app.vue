</template>

 <div id="app">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vue</title>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>




    <header id="header">
      <div class="container">
        <h2>crud</h2>
      </div>
    </header>
    <main id="main">
      <div class="container">
        <div id="ssfcrud">
          <table class="table table-bordered table-hover table-striped table-xs-block">
            <caption>
              <div class="pull-right multiple-action">
                <div class="search">
                  <div class="input-group">
                    <input type="search" class="form-control" placeholder="Search by Name" v-model="filterByName">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-search"></i>
                    </span>
                  </div>
                </div>
                <button type="button" class="btn btn-danger" v-if="checkedList.length > 0"><i class="glyphicon glyphicon-trash"></i></button>
                <div class="dropdown filterbox" :class="{ 'open': filterToggle }">
                  <button type="button" class="btn btn-success" v-on:click="filterToggle = !filterToggle"><i class="glyphicon glyphicon-filter"></i></button>
                  <ul class="dropdown-menu list-group">
                    <li class="list-group-item">
                      <label>Filter by Status</label>
                    </li>
                    <li class="list-group-item">
                      <input type="checkbox" value="actived" v-model="filterByStatus"> Actived
                    </li>
                    <li class="list-group-item">
                      <input type="checkbox" value="deactived" v-model="filterByStatus"> Deactived
                    </li>
                    <li class="list-group-item">
                      <input type="checkbox" value="created" v-model="filterByStatus"> Created
                    </li>
                  </ul>
                </div>
                <button type="button" class="btn btn-primary" v-on:click="openModal()"><i class="glyphicon glyphicon-plus"></i></button>
              </div>
              <div class="notifications">
                <p class="alert bg-success" v-if="notification"></p>
                <p class="alert bg-warning" v-if="checkedAll">
                  All <strong v-text="checkedList.length"></strong> items checked
                  <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </p>
              </div>
            </caption>
            <thead>
              <tr class="bg-primary">
                <th width="30" class="text-center"><input type="checkbox" v-model="checkedAll"></th>
                <th width="50" v-on:click="sortById = !sortById">ID <i class="pull-right glyphicon" :class="[sortById?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
                <th v-on:click="sortByName = !sortByName">Name <i class="pull-right glyphicon" :class="[sortByName?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
                <th v-on:click="sortByOld = !sortByOld">Old <i class="pull-right glyphicon" :class="[sortByOld?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
                <th v-on:click="sortByEmail = !sortByEmail">Email <i class="pull-right glyphicon" :class="[sortByEmail?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
                <th v-on:click="sortByStatus = !sortByStatus">Status <i class="pull-right glyphicon" :class="[sortByStatus?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
                <th v-on:click="sortByStatus = !sortByStatus">Birthday <i class="pull-right glyphicon" :class="[sortByStatus?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
                <th width="105" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in listView" :class="{'warning':checkedList.includes(item.id)}">
                <td align="center">
                  <input type="checkbox" :value="item.id" v-model="checkedList">
                </td>
                <td align="center"><b>{{ item.id }}</b></td>
                <td v-text="item.name"></td>
                <td v-text="item.old"></td>
                <td v-text="item.email"></td>
                <td v-text="item.status"></td>
                <td>{{ item.birthday | getDayOfBirthday }}</td>
                <td>
                  <button type="button" class="btn btn-warning" v-on:click="openModal(item)"><i class="glyphicon glyphicon-edit"></i></button>
                  <button type="button" class="btn btn-danger" v-on:click="deleting(index)"><i class="glyphicon glyphicon-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
          <modal v-if="showModal" v-on:close="showModal = false">
            <h3 slot="title">{{ modalType==1?'Add':'Edit' }} Item</h3>
            <div slot="body" :class="{ 'has-error':isFormValid }">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group" :class="{ 'has-success':item.id!=null && isFormValid }">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-ban-circle"></i>
                      </span>
                      <input type="text" class="form-control" readonly disabled v-model="item.id">
                    </div>
                    <span class="help-block" v-if="item.id == null && isFormValid">Id is invalid!</span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group" :class="{ 'has-success':item.status && isFormValid }">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-ban-circle"></i>
                      </span>
                      <select class="form-control" v-model="item.status">
                        <option value="created">Created</option>
                        <option value="actived">Actived</option>
                        <option value="deactived">Deactived</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group" :class="{ 'has-success':item.name!=null && isFormValid }">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Fullname" v-model="item.name">
                </div>
                <span class="help-block" v-if="item.name == null && isFormValid">Name is empty!</span>
              </div>
              <div class="form-group" :class="{ 'has-success':item.old!=null && isFormValid }">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-time"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Old" v-model="item.old">
                </div>
                <span class="help-block" v-if="item.old == null && isFormValid">Old is empty!</span>
              </div>
              <div class="form-group" :class="{ 'has-success':item.old!=null && isFormValid && checkEmailValid(item.email) }">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-envelope"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Email Address" v-model="item.email">
                </div>
                <span class="help-block" v-if="item.email == null && isFormValid">Email is empty!</span>
                <span class="help-block" v-else-if="!checkEmailValid(item.email) && isFormValid">Email is invalid!</span>
              </div>
              <button type="button" class="btn btn-primary" v-on:click="submit(item)">Submit</button>
            </div>
            <!-- <div slot="footer" class="text-center"></div> -->
          </modal>
        </div>
      </div>
    </main>
    <footer id="footer">
      <div class="container">
        <p class="text-right">Footer</p>
      </div>
    </footer>

    <!-- template for the modal component -->
    <script type="text/x-template" id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-primary">
                <button type="button" class="close" v-on:click="$emit('close')"><span aria-hidden="true">&times;</span></button>
                <slot name="title">Modal Title</slot>
              </div>
              <div class="modal-body">
                <slot name="body"></slot>
              </div>
              <div class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>




  </body>

</div>
</template>