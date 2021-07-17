require('./db/mongoose');

const express = require('express');

const cors = require('cors');

const expenseRouter = require('./expense/expenses.router');
const userRouter = require('./users/user.router');

const app = express();

const PORT = process.env.PORT || 3005;

app.use(cors());

app.use(express.json());

const routers = [expenseRouter, userRouter];

routers.forEach((router) => app.use(router));

app.listen(PORT, () => {
	console.log('Server is up on', PORT);
});