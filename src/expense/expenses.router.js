const express = require('express');
const auth = require('../middleware/auth');
const HelperService = require('../utils/helper');
const Expense = require('./expenses.model');

const router = new express.Router();

router.get('/api/expenses', auth, async (req, res) => {
	const filter = JSON.parse(req.query.filter || '{}');
	try {
		await req.user.populate({
			path: 'expenses',
			match: filter
		}).execPopulate();
		HelperService.handleSuccess(res, req.user.expenses, 200);
	} catch (error) {
		HelperService.handleError(res, error, 500);
	}
});

router.post('/api/expenses', auth, async (req, res) => {
	const expense = new Expense(req.body);
	expense.createdBy = req.user.id;
	try {
		await expense.save();
		HelperService.handleSuccess(res, expense, 201);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

router.delete('/api/expenses/:id', auth, async (req, res) => {
	const _id = req.params.id;
	try {
		if (_id === 'all') {
			await Expense.deleteMany();
			HelperService.handleSuccess(res, []);
			return;
		}
		const expense = await Expense.deleteOne({ _id });
		if (expense.deletedCount) {
			return HelperService.handleSuccess(res, {});
		}
		throw new Error('Not Found!');

	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

module.exports = router;