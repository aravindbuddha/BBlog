define(['backbone',
  'js/app/controller/home.js'
], function(Backbone, home) {
  //setting Backbone router
  Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'index.html': 'home',
      ':tag': 'getPostByTag',
      "/user": "showUsers",
      "/admin": "showAdmin",
      "/page": "showPage",
      ":post/:id": "getPost",
      //"*actions": "defaultRoute" // matches http://example.com/#anything-here
    }
  });
  return {
    init: function() {
      var self = this;
      var router = new Router;
      router.on('route:getPost', function(id1, id2) {
        console.log(id1 + "  " + id2);
      });
      router.on('route:home', function() {
        alert('hi');
        self.home();
      });
      router.on('route:showUsers', function(actions) {
        console.log("default user access");
        console.log('No route:', actions);
      });
      router.on('route:defaultRoute', function(actions) {
        // We have no matching route, lets just log what the URL was
        console.log('No route:', actions);
      });
      Backbone.history.start();
      // return BBlog.AppRouter;
    },
    home: function() {
      home.init.render();
    }
  }
});