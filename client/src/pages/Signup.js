import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiAccountPlusOutline } from '@mdi/js';

// https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example

const Signup = () => {
	const [ user, setUser ] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { firstName, lastName, username, email, password, confirmPassword } = user;

	const handelChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="text-center mb-4">
					<Icon path={mdiAccountPlusOutline} size={5} color="#ddd" />
					<h1 className="font-weight-normal mt-3">Create Account</h1>
					<p>It's free and only takes a minute.</p>
				</div>
				<form onSubmit={handleSubmit} noValidate>
					<div className="row">
						<div className="col-md-6 mb-3">
							<label htmlFor="firstName">First name</label>
							<input
								type="text"
								className="form-control"
								id="firstName"
								name={firstName}
								value={firstName}
								onChange={handelChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="lastName">Last name</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								name={lastName}
								value={lastName}
								onChange={handelChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								className="form-control"
								id="username"
								name={username}
								value={username}
								onChange={handelChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name={email}
								value={email}
								onChange={handelChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name={password}
								value={password}
								onChange={handelChange}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="confirmPassword">Confirm password</label>
							<input
								type="password"
								className="form-control"
								id="confirmPassword"
								name={confirmPassword}
								value={confirmPassword}
								onChange={handelChange}
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary btn-lg btn-block mt-4">
						Sign Up
					</button>
				</form>
				<p className="text-center mt-4">
					Already have an account? <Link to="/login">Login here</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
