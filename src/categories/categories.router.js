const Category = require("./categories.model");
const express = require('express');
const auth = require("../middleware/auth");
const HelperService = require("../utils/helper");

const router = new express.Router();

router.post('/api/categories', auth, async (req, res) => {
	const category = new Category(req.body);

	try {
		await category.save();
		HelperService.handleSuccess(res, category, 201);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

router.get('/api/categories', auth, async (req, res) => {
	try {
		const categs = await Category.find({});
		HelperService.handleSuccess(res, categs, 200);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

router.get('/api/categories/:id', auth, async (req, res) => {
	const _id = req.params.id;

	try {
		const category = await Category.findOne({ _id });
		if (!category) {
			throw new Error('No category found!');
		}
		await category.populate({ path: 'expensesOfCategory' }).execPopulate();
		HelperService.handleSuccess(res, category, 200);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

router.patch('/api/categories/:id', auth, async (req, res) => {
	const _id = req.params.id;

	try {
		let updated;
		if (_id === 'all') {
			const categories = await Category.find();
			console.log(categories);
			updated = categories.map((cat) => { return { name: { ...cat.name }, ...req.body }; });
			console.log(updated);
		} else {
			const category = await Category.findOne({ _id });
			if (!category) {
				throw new Error('No category found!');
			}
			updated = { name: { ...category.name, ...req.body } };
		}
		HelperService.handleSuccess(res, updated, 200);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

router.delete('/api/categories/:id', auth, async (req, res) => {
	const _id = req.params.id;
	try {
		if (_id === 'all') {
			await Category.deleteMany();
			HelperService.handleSuccess(res, []);
			return;
		}
		const category = await Category.deleteOne({ _id });
		if (category.deletedCount) {
			return HelperService.handleSuccess(res, {});
		}
		throw new Error('Not Found!');

	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

module.exports = router;