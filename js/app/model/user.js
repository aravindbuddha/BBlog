User = Backbone.Model.extend({
  urlRoot: '/user',
  defaults: {
    fname: '',
    lname: '',
    name: 'Gust',
    email: '',
    type: 'Reader'
  },
  initialize: function() {
    this.events();
    alert("Welcome to this world");
  },
  events: function() {

  }
});

var user = new User;