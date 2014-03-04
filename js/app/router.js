define(['backbone'], function(Backbone) {
  BBlog.AppRouter = Backbone.Router.extend({
    routes: {
      "*user": "defaultRoute",
      "*actions": "defaultRoute"
    }
  });

  var app_router = new BBlog.AppRouter;
  app_router.on('route:defaultRoute', function(actions) {
    alert(actions);
  })
  Backbone.history.start();
  console.log('hi');
  return BBlog.AppRouter;
});