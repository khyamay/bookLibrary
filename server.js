var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

//Create server
var app = express();

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( path.join( application_root, '/') ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//Routes
app.get('/api', function(request, response){
	response.send('Library is running');
});

//connect to database
mongoose.connect('mongodb://127.0.0.1:27017');

//schemas
var Book = new mongoose.Schema({
	title: String,
	author: String, 
	releaseDate: Date
});

//Models
var BookModel = mongoose.model('Book', Book);

//Get a list of all books
app.get('/api/books', function(request, response){
	return BookModel.find(function(err, books){
		if(!err){
			return response.send(books);
		}else{
			return console.log(err);
		}
	});
});

//Insert a new book
app.post('/api/books', function(request, response){
	var book = new BookModel({
		title: request.body.title,
		author: request.body.author,
		releaseDate: request.body.releaseDate
	});
	book.save(function(request, response){
		if(!err){
			return console.log('created');
		}else{
			return console.log(err);
		}
	});
	return response.send(book);
});

//Get a single book by id
app.get('/api/books/:id', function(request, response){
	return BookModel.findById(request.params.id, function(err, book){
		if(!err){
			return response.send(book);
		}else{
			return console.log(err);
		}
	});
});

//Start server
var port = 4711;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
