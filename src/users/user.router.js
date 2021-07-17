const express = require('express');
const HelperService = require('../utils/helper');
const User = require('./users.model');
const userRouter = new express.Router();

userRouter.get('/api/users/profile', (req, res) => {
	res.send('asdas');
});

userRouter.post('/api/users/login', async (req, res) => {

	try {
		const user = await User.verifyCredentials(req.body);

		const token = await user.generateToken();

		HelperService.handleSuccess(res, { user, token }, 200);
	} catch (error) {
		HelperService.handleError(res, error, 403);
	}
});

userRouter.post('/api/users/register', async (req, res) => {
	const user = new User(req.body);

	const token = await user.generateToken();

	try {
		await user.save();
		HelperService.handleSuccess(res, { user, token }, 201);
	} catch (error) {
		HelperService.handleError(res, error, 400);
	}
});

module.exports = userRouter;