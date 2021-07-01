const express = require('express');
const HelperService = require('../utils/helper');
const Expense = require('./expenses.model');

const router = new express.Router();

router.get('/expenses', async (req, res) => {
	try {
		const expenses = await Expense.find();
		HelperService.handleSuccess(res, expenses, 200);
	} catch (error) {
		HelperService.handleError(res, error, 500);
	}
});

router.post('/expenses', async (req, res) => {
	const expense = new Expense(req.body);
	try {
		await expense.save();
		HelperService.handleSuccess(res, expense, 201);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

module.exports = router;