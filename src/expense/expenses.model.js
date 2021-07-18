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
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
}, {
	timestamps: true
});

expenseSch.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
		delete ret.createdBy;
	}
});

const Expense = mongoose.model('Expense', expenseSch);

module.exports = Expense;