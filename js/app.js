var app = app || {};

$(function(){
	var books = [
		{
			title:'JavaScript: The Good Parts',
			author:'Douglas CrockFord',
			relaseDate: '2008',
			keywords: 'JavaScript Programming'
		},
		{
			title:'The Little Book on CoffeScript',
			author:'Alex MacCaw',
			relaseDate: '2012',
			keywords: 'Coffee Programming'
		},
		{
			title:'Scala for the Impatient',
			author:'Cay s. Horstman',
			relaseDate: '2012',
			keywords: 'Scala Programming'
		},{
			title:'American Psyscho',
			author:'Bret Easton Ellis',
			relaseDate: '1991',
			keywords: 'Novel Splatter'
		}
	];

	new app.LibraryView(books);
});