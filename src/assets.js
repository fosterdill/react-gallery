(function (root) {
  var ChuteApp = root.ChuteApp = root.ChuteApp || {};
  ChuteApp.Assets = Backbone.Collection.extend({
    url: function () {
      return '//api.getchute.com/v2/albums/' + this.albumShortcut + '/assets';
    },
    initialize: function (models, options) {
      this.albumShortcut = options.albumShortcut;
    },
    parse: function (data) {
      return data.data;
    }
  });
})(window);