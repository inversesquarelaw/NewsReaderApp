NewReader.Models.Feed = Backbone.Model.extend({
  initialize: function () {
    var feedEntries = new NewReader.Collections.FeedEntries([], { feed: this });
    this.set({ feedEntries: feedEntries });
  },

  parse: function(response) {
    if(response["entries"]) {
      this.get('feedEntries').set(response["entries"]);
      delete response["entries"]
    }
    return response;
  }
});
