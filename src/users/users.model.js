const mongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userSch = new mongoose.Schema({
	fName: {
		type: String,
		required: true,
		trim: true,
		validate(val) {
			if (!validator.isLength(val, { min: 3 })) {
				throw new Error("First name should be more than 3 chars.");
			}
		}
	},
	lName: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		validate(val) {
			if (!validator.isEmail(val)) {
				throw new Error("Invalid email address!");
			}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		validate(val) {
			if (!validator.isLength(val, { min: 3 })) {
				throw new Error("Password should be more than 7 chars.");
			}
		},
	},
	tokens: [{
		token: {
			type: String,
			required: true,
		},
	}]
}, {
	timestamps: true,
});

userSch.methods.toJSON = function () {
	const user = this.toObject({
		virtuals: true,
	});

	delete user.password;
	delete user.tokens;
	delete user._id;
	delete user.__v;

	return user;
};

userSch.pre('save', async function (next) {
	const userPassword = this.password;

	if (this.isModified('password')) {
		const hashed = await bcrypt.hash(userPassword, 10);
		this.password = hashed;
	}

	next();
});

userSch.statics.verifyCredentials = async ({ email, password }) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("You\'re not registered");
	}

	const isVerified = await bcrypt.compare(password, user.password);

	if (!isVerified) {
		throw new Error("We couldn't verify the entered email & password");
	}

	return user;
};

userSch.methods.generateToken = async function () {
	const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
	this.tokens = this.tokens.concat({ token });
	await this.save();

	return token;
};

const User = mongoose.model('User', userSch);

module.exports = User;