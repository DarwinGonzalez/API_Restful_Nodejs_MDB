
var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

routes = require('./routes/items')(app);

mongoose.connect('mongodb://localhost/items', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});