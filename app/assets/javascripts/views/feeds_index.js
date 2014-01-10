NewReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds/index'],
  tagName: 'ul',
  className: 'feeds-index',

  events: {
    "click .add-button" : "add"
  },

  initialize: function () {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function () {
    console.log("rendering sidebar view");
    var that = this;
    that.$el.html(that.template({
      feeds: that.collection
    }));
    return this;
  },

  add: function(event){
    var newUrl = $('input[name=feed\\[url\\]]').val();
    this.collection.create({url: newUrl}, {wait:true});
  }
});
