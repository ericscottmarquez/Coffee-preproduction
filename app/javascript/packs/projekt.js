import Vue from 'vue/dist/vue.min.js'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'


var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}

Vue.use(VueResource)

document.addEventListener('turbolinks:load', () => {
var list = [
  {
    id: 1,
    name: 'a',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'deactived',
    birthday: '2018-04-12'
  },
  {
    id: 2,
    name: 'b',
    old: 20,
    email: 'admin@nexustechnologies.solutions',
    status: 'actived',
    birthday: '2018-04-1'
  },
  {
    id: 3,
    name: 'c',
    old: 16,
    email: 'admin@nexustechnologies.solutions',
    status: 'actived',
    birthday: '2018-04-11'
  },
  {
    id: 4,
    name: 'e',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'created',
    birthday: '2018-04-12'
  },
  {
    id: 5,
    name: 'b',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'deactived',
    birthday: '2018-04-12'
  },
  {
    id: 6,
    name: 'a',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'actived',
    birthday: '2018-04-12'
  },
  {
    id: 7,
    name: 'g',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'created',
    birthday: '2018-04-12'
  },
  {
    id: 8,
    name: 'd',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'deactived',
    birthday: '2018-04-12'
  },
  {
    id: 9,
    name: 'p',
    old: 18,
    email: 'admin@nexustechnologies.solutions',
    status: 'deactived',
    birthday: '2018-04-12'
  }
];

Vue.component('modal', {
  template: '#modal-template'
});

new Vue({
  el: '#ssfcrud',
  data: {
    list: list,
    item: {},
    checkedList: [],
    filterToggle: false,
    filterByName: [],
    filterByStatus: [],
    sortById: false,
    sortByName: false,
    sortByOld: false,
    sortByStatus: false,
    sortByEmail: false,
    notification: false,
    showModal: false,
    modalType: 0,
    isFormValid: false
  },
  computed: {
    listView: function () {
      var self = this;
      if (self.filterByName.length > 0 || self.filterByStatus.length > 0) {
        return self.list.filter(function(item) {
          return self.filterByName.indexOf(item.name) > -1 || self.filterByStatus.indexOf(item.status) > -1;
        });
      } else {
        return self.list;
      }
    },
    checkedAll: {
      get: function () {
        var self = this;
        if (self.checkedList.length > 0) {
          return self.listView.length == self.checkedList.length;
        } else {
          return false;
        }
      },
      set: function (val) {
        var self = this;
        self.checkedList = [];
        if (val) {
          for (var i = 0; i < self.listView.length; i++) {
            self.checkedList.push(self.listView[i].id);
          }
        } else {
          self.checkedList = [];
        }
      }
    }
  },
  watch: {
    sortById: function (val) {
      var self = this;
      self.listView = self.sortBy(self.listView, 'id', val);
    },
    sortByName: function (val) {
      var self = this;
      self.listView = self.sortBy(self.listView, 'name', val);
    },
    sortByOld: function (val) {
      var self = this;
      self.listView = self.sortBy(self.listView, 'old', val);
    },
    sortByEmail: function (val) {
      var self = this;
      self.listView = self.sortBy(self.listView, 'email', val);
    },
    sortByStatus: function (val) {
      var self = this;
      self.listView = self.sortBy(self.listView, 'status', val);
    }
  },
  methods: {
    sortBy: function(array, param, reverse) {
      var filterA, filterB;
      return array.sort(function (a, b) {
        switch (param) {
          case 'id':
            filterA = a.id;
            filterB = b.id;
            break;
          case 'name':
            filterA = a.name;
            filterB = b.name;
            break;
          case 'old':
            filterA = a.old;
            filterB = b.old;
            break;
          case 'status':
            filterA = a.status;
            filterB = b.status;
            break;
        }
        if (reverse) {
          return (filterA > filterB) ? 1 : -1;
        } else {
          return (filterA < filterB) ? 1 : -1;
        }
      });
    },
    checkEmailValid: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
    },
    openModal: function (item) {
      var self = this;
      if (item) {
        self.item = item;
        self.modalType = 2;
      } else {
        self.item = {
          id: self.list[self.list.length - 1].id + 1,
          name: null,
          old: null,
          email: null,
          status: 'created'
        };
        self.modalType = 1;
      }
      self.showModal = true;
    },
    submit: function (item) {
      var self = this;
      if (item.id == null
        || item.name == null
        || item.old == null
        || item.email == null
        || !self.checkEmailValid(item.email)) {
        self.isFormValid = true;
      } else {
        if (self.modalType == 1) {
          self.list.push(item);
        } else if (self.modalType == 2) {
          self.list.find(function (value, index) {
            if (value.id == item.id) {
              self.list[index] = item;
            }
          });
        } else {
          return;
        }
        self.item = {};
        self.showModal = false;
      }
    },
    deleting: function (index) {
      var self = this;
      var confirmDelete = confirm("Are you sure to delete this?");
      if (confirmDelete) {
        self.list.splice(index, 1);
      }
    }
  },
  filters: {
    getDayOfBirthday(val) {
      var temp = val.slice(4);
      var toYear = new Date().getFullYear();
      var thisBirthday = toYear + temp;
      var _getDay = new Date(thisBirthday).getDay();
      var todayDays = ['Chu Nhat', 'Thu 2', 'Thu 3', 'Thu 4', 'Thu 5', 'Thu 6', 'Thu 7'];
      return todayDays[_getDay];
    }
  }
});

})

