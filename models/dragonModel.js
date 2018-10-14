const mongoose = require('mongoose');

const dragonSchema = new mongoose.Schema({
	name: {type: String, required: true},
	from: {type: String, required: true},
	loves: [String],
	size: {type: Number, min: 0},
	color: String
})

module.exports = mongoose.model('Dragon', dragonSchema);