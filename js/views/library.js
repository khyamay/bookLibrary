var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',

	initialize: function(intialBooks){
		this.collection = new app.Library(intialBooks);
		this.render();
	},

	render: function(){
		this.collection.each(function(item){
			this.renderBook(item);
		}, this);

	},

	renderBook: function(item){
		var bookView = new app.bookView({
			model: item
		});

		this.$el.append(bookView.render().el);
	}
});