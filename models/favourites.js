const mongoose = require('mongoose');
const Schema = require('Schema');

const FavouritesSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	currency: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Coins',
		},
	],
});

module.exports = mongoose.model('favourites', FavouritesSchema);
