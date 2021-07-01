require('./db/mongoose');

const express = require('express');

const expenseRouter = require('./expense/expenses.router');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(expenseRouter);

app.listen(PORT, () => {
	console.log('Server is up on', PORT);
});