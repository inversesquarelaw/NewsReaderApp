NewReader.Views.EntryShow = Backbone.View.extend({
  template: JST['entries/show'],
  render: function(){
    var that = this;
    that.$el.html(that.template({ entry: that.model }));
    return that;
  }
})