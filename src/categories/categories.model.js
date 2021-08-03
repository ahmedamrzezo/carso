const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	name: {
		type: {
			en: {
				type: String,
				required: true
			},
			ar: {
				type: String,
				required: true
			}
		},
		required: true
	}
}, {
	versionKey: false
});

categorySchema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	}
});
categorySchema.virtual('expensesOfCategory', {
	ref: 'Expense',
	foreignField: 'categoryId',
	localField: '_id'
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;