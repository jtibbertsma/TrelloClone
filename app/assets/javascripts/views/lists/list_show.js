TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["lists/show"],
  className: "list-index-item",

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    return this;
  }
});