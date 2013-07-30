NewReader.Models.Feed = Backbone.Model.extend({
  parse: function(response) {
    var that = this;
    _.each(_.keys(response), function(key){
      if (key !== "entries")
        that.set(key, response[key]);
    });
    that.set("entries", new NewReader.Collections.Entries(response["entries"], {
      url:"/feeds/" + response["id"] + "/entries"
    }))
  }
});