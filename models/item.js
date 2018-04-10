var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var itemSchema = new Schema({
	nid: 		{ type: Number },
	valor: 		{ type: String }
});


module.exports = mongoose.model('Items', itemSchema);