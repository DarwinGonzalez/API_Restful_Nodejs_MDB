var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var itemSchema = new Schema({
	nid: 		{ type: String },
	valor: 		{ type: String }
});


module.exports = mongoose.model('items', itemSchema);