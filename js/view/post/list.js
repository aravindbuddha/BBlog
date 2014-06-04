define(['backbone', 'underscore', 'text'], function (BackBone, _, text) {
  var tpl = require('text!../../tmpl/post/list.html');
  var PostList = BackBone.View.extend({
    template: _.template(tpl),
    initialize: function () {
      console.log(this.template);
    },
    show: function () {
      console.log(this.template);
    }
  });

  return PostList;
});