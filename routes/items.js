
module.exports = function(app) {

  var Item = require('../models/item.js');
  
  findAllItems = function(req, res) {
  	Item.find(function(err, items) {
		console.log("nid: "+req.body.nid)
		console.log("valor: "+ req.body.valor);
  		if(!err) {
        console.log('GET /items')
  			res.send(items);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

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

  findByNid = function(req, res) {
	Item.findByNid(req.params.nid, function(err, item) {
		if(!err) {
	  console.log('GET /itemnid/' + req.params.nid);
			res.send(item);
		} else {
			console.log('ERROR: ' + err);
		}
	});
  };

  addItem = function(req, res) {
  	console.log('POST');
  	console.log(req.body.nid);
  	console.log(req.body.valor);
    
    var myData = new Item({
  		nid:    req.body.nid,
  		valor: 	  req.body.valor
  	});
    
    myData.save().then(item => {
        res.send("item saved to database");
    })

  	myData.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(myData);
  };
  

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
  app.get('/itemnid/:nid', findByNid);
  app.post('/item', addItem);
  app.put('/item/:id', updateItem);
  app.delete('/item/:id', deleteItem);

}