window.BBlog = window.BBlog || {};

// Filename: init.js
require.config({
  //baseUrl: 'js/',
  paths: {
    jquery: 'lib/jquery/jquery',
    underscore: 'lib/underscore-amd/underscore',
    backbone: 'lib/backbone-amd/backbone'
  }
});

require(['app/router', 'app/app'], function(Router, App) {
  App.start();
});