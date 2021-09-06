const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	currency: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Coin',
		},
	],
});

module.exports = mongoose.model('favourite', FavouriteSchema);
