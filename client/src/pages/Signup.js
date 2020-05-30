import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiAccountPlusOutline } from '@mdi/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().min(2, 'Too short!').required('Required'),
	lastName: Yup.string().min(2, 'Too short!').required('Required'),
	username: Yup.string().lowercase().min(2, 'Too short!').required('Required'),
	email: Yup.string().lowercase().email('Must be a valid email').required('Required'),
	password: Yup.string()
		.matches(lowercaseRegex, 'One lowercase required')
		.matches(uppercaseRegex, 'One uppercase required')
		.matches(numericRegex, 'One number required')
		.min(6, 'Minimum 6 characters required')
		.required('Required'),
	confirmPassword: Yup.string().oneOf([ Yup.ref('password') ], 'Password must be the same').required('Required')
});

// https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example

const Signup = () => {
	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="text-center mb-4">
					<Icon path={mdiAccountPlusOutline} size={5} color="#ddd" />
					<h1 className="font-weight-normal mt-3">Create Account</h1>
					<p>It's free and only takes a minute.</p>
				</div>
				<Formik
					initialValues={{
						firstName: '',
						lastName: '',
						username: '',
						email: '',
						password: '',
						confirmPassword: ''
					}}
					validationSchema={SignupSchema}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
							resetForm();
						}, 400);
					}}
				>
					{({ errors, touched, isSubmitting }) => (
						<Form>
							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="firstName">First name</label>
									<Field
										type="text"
										name="firstName"
										id="firstName"
										className={
											'form-control' +
											(errors.firstName && touched.firstName ? ' is-invalid' : '')
										}
									/>
									<ErrorMessage name="firstName" component="div" className="invalid-feedback" />
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="lastName">Last name</label>
									<Field
										type="text"
										name="lastName"
										id="lastName"
										className={
											'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')
										}
									/>
									<ErrorMessage name="lastName" component="div" className="invalid-feedback" />
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="username">Username</label>
									<Field
										type="text"
										name="username"
										id="username"
										className={
											'form-control' + (errors.username && touched.username ? ' is-invalid' : '')
										}
									/>
									<ErrorMessage name="username" component="div" className="invalid-feedback" />
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="email">Email address</label>
									<Field
										type="email"
										name="email"
										id="email"
										className={
											'form-control' + (errors.email && touched.email ? ' is-invalid' : '')
										}
									/>
									<ErrorMessage name="email" component="div" className="invalid-feedback" />
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="password">Password</label>
									<Field
										type="password"
										name="password"
										id="password"
										className={
											'form-control' + (errors.password && touched.password ? ' is-invalid' : '')
										}
									/>
									<ErrorMessage name="password" component="div" className="invalid-feedback" />
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="confirmPassword">Confirm password</label>
									<Field
										type="password"
										name="confirmPassword"
										id="confirmPassword"
										className={
											'form-control' +
											(errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')
										}
									/>
									<ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
								</div>
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-lg btn-block mt-4"
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Loading...' : 'Sign Up'}
							</button>
						</Form>
					)}
				</Formik>
				<p className="text-center mt-4">
					Already have an account? <Link to="/auth/login">Login here</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
