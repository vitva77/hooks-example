const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		required: true
	},
	lastName: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
		unique: true
	},
	password: {
		type: String,
		trim: true,
		minlength: 6,
		required: true
	},
	role: {
		type: String,
		default: 'user'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('user', userSchema);
