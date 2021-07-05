const express = require('express');
const userRouter = new express.Router();

userRouter.get('/api/users', (req, res) => {
	res.send('asdas');
});

module.exports = userRouter;