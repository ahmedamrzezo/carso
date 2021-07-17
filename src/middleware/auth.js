const jwt = require("jsonwebtoken");
const User = require("../users/users.model");
const HelperService = require("../utils/helper");

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.replace('Bearer ', '');

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

		if (!user) {
			throw new Error('Your request is impossible to handle!');
		}

		req.token = token;
		req.user = user;
		req.expiresIn = decoded.exp;

		next();
	} catch (error) {
		HelperService.handleError(res, { error }, 401);
	}
};

module.exports = auth;