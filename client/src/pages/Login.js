import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiLoginVariant } from '@mdi/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password: Yup.string().required('Password is required')
});

const Login = () => {
	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="text-center mb-4">
					<Icon path={mdiLoginVariant} size={5} color="#ddd" />
					<h1 className="font-weight-normal mt-3">Member Login</h1>
					<p>Login to access your dashboard.</p>
				</div>
				<Formik
					initialValues={{
						email: 'john.doe@gmail.com',
						password: '123456'
					}}
					validationSchema={LoginSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ errors, touched, isSubmitting }) => (
						<Form>
							<div className="form-group">
								<label htmlFor="email">Email address</label>
								<Field
									type="email"
									name="email"
									id="email"
									className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
								/>
								<ErrorMessage name="email" component="div" className="invalid-feedback" />
							</div>
							<div className="form-group">
								<label htmlFor="password" className="d-block">
									Password{' '}
									<Link to="/forgot-password" className="float-right">
										Forgot?
									</Link>
								</label>
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
							<div className="form-group form-check">
								<input type="checkbox" className="form-check-input" id="rememberMe" />
								<label className="form-check-label" htmlFor="rememberMe">
									Keep me signed in
								</label>
							</div>
							<button type="submit" className="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>
								{isSubmitting ? 'Loading...' : 'Login'}
							</button>
						</Form>
					)}
				</Formik>

				<p className="text-center mt-4">
					Don't have an account? <Link to="/signup">Sign up now</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
