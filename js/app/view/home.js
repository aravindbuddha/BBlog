define(['backbone'], function(Backbone, ) {
  var Post = Backbone.View.extend({
    el: 'body',
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html("aravind");
      return this;
    }
  });
  return {
    init: new Post();
  }
});