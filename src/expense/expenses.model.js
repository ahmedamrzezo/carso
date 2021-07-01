const mongoose = require('mongoose');

const expenseSch = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	date: {
		type: Date,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	expense: {
		type: Number,
		required: true
	}
});

const Expense = mongoose.model('Expense', expenseSch);

module.exports = Expense;