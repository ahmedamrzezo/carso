require('./db/mongoose');

const express = require('express');

const adminRouter = require('./admin/admin.router');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(adminRouter);

app.listen(PORT, () => {
	console.log('Server is up on', PORT);
});