define([backbone, jquery], function (BackBone, $) {
  var PostList = BackBone.Model.extend({
    defaults: {
      title: "",
      img: "",
      summary: "",
      readMoreLink: ""
    },
    initialize: function () {

    }
  });
});