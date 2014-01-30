var app = app || {};

app.Book = Backbone.Model.extend({
	defaults:{
		coverImage:'img/book.jpg',
		title:'No Title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords:'None'
	}

});