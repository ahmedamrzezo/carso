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
	amount: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

expenseSch.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id; }
});

const Expense = mongoose.model('Expense', expenseSch);

module.exports = Expense;