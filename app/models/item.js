import mongoose from 'mongoose'
const Schema = mongoose.Schema

// EL estandar dice que suele ir en camelcase Item y no item 
// Se usa const porque no es una variable al uso, sino una constante que no va a cambiar

const Item = new Schema({
	nid: 		{ type: String },
	valor: 		{ type: String }
});


module.exports = mongoose.model('Item', Item);