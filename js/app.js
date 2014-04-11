// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'app/router/router', // Request router.js
], function($, _, Backbone, Router) {
  return {
    init: function() {
      //App initilization
      Router.init();
    }
  };
});