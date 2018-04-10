
module.exports = function(app) {

  var Item = require('../models/item.js');

  //GET - Return all Items in the DB
  findAllItems = function(req, res) {
  	Item.find(function(err, tvshows) {
  		if(!err) {
        console.log('GET /items')
  			res.send(items);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	Item.findById(req.params.id, function(err, item) {
  		if(!err) {
        console.log('GET /item/' + req.params.id);
  			res.send(item);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addItem = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var item = new Item({
  		nid:    req.body.nid,
  		valor: 	  req.body.valor
  	});

  	item.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(item);
  };

  //PUT - Update a register already exists
  updateItem = function(req, res) {
  	item.findById(req.params.id, function(err, item) {
  		item.nid   = req.body.nid;
  		item.valor    = req.body.valor;
 
  		item.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(item);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteItem = function(req, res) {
  	Item.findById(req.params.id, function(err, item) {
  		item.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/items', findAllItems);
  app.get('/item/:id', findById);
  app.post('/item', addItem);
  app.put('/item/:id', updateItem);
  app.delete('/item/:id', deleteItem);

}