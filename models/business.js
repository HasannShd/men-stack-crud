// models/business.js

const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema(
	{
		name: String,
		category: String,
		description: String,
		location: String,
		phoneNumber: String,
		website: String,
		isVerfified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

const Business = mongoose.model("Business", businessSchema); // create model
// models/business.js

module.exports = Business;