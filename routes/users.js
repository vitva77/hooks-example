const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/userSchema');

// ----- CRUD Users ----- //

// @route		POST api/users/new
// @desc		Register a new user
// @access	Public
router.post(
	'/new',
	[
		check('firstName', 'Please add your first name').not().isEmpty(),
		check('lastName', 'Please add your last name').not().isEmpty(),
		check('username', 'Please add your username').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more characters').isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		const { firstName, lastName, username, email, password } = req.body;

		try {
			let user = await User.findOne({ $or: [ { email }, { username } ] });

			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}

			user = new User({
				firstName,
				lastName,
				username,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ user, token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).json({ msg: 'Server Error' });
		}
	}
);

// @route		GET api/users/view
// @desc		View all users
// @access	Private
router.get('/view', async (req, res) => {
	try {
		const users = await User.find().sort({ createdAt: -1 });
		res.json(users);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: 'Server Error' });
	}
});

// @route		GET api/users/:id/view
// @desc		View single user
// @access	Private
router.get('/:id', (req, res) => res.json({ msg: 'View single user' }));

// @route		PUT api/users/:id/edit
// @desc		Update a user
// @access	Private
router.put('/:id/edit', async (req, res) => {
	const { firstName, lastName, username, email } = req.body;

	// Build user object
	const userFields = {};
	if (firstName) userFields.firstName = firstName;
	if (lastName) userFields.lastName = lastName;
	if (username) userFields.username = username;
	if (email) userFields.email = email;

	try {
		let user = await User.findById(req.params.id);

		if (!user) return res.status(404).json({ msg: 'User not found' });

		user = await User.findByIdAndUpdate(req.params.id, { $set: userFields }, { new: true });

		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: 'Server Error' });
	}
});

// @route		DELETE api/users/:id/delete
// @desc		Remove a user
// @access	Private
router.delete('/:id/delete', async (req, res) => {
	try {
		let user = await User.findById(req.params.id);

		if (!user) return res.status(404).json({ msg: 'User not found' });

		await User.findByIdAndRemove(req.params.id);

		res.json({ msg: 'User removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: 'Server Error' });
	}
});

module.exports = router;
