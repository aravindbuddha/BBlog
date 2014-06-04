require.config({
  paths: {
    "jquery": "vender/jquery/dist/jquery",
    "underscore": "vender/underscore-amd/underscore",
    "backbone": "vender/backbone-amd/backbone",
    "text": "vender/requirejs-text/text"
  }
});

require(['view/post/list'], function (AppView) {
  new AppView();
});