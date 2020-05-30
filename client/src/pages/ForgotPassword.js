import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiAccountAlertOutline } from '@mdi/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
	email: Yup.string().lowercase().email('Must be a valid email').required('Required')
});

const ForgotPassword = () => {
	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="text-center mb-4">
					<Icon path={mdiAccountAlertOutline} size={5} color="#ddd" />
					<h1 className="font-weight-normal mt-3">Forgot Your Password?</h1>
					<p>Please enter the email address registered on your account.</p>
				</div>
				<Formik
					initialValues={{
						email: ''
					}}
					validationSchema={ForgotPasswordSchema}
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
							<button type="submit" className="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>
								{isSubmitting ? 'Loading...' : 'Reset Password'}
							</button>
						</Form>
					)}
				</Formik>

				<p className="text-center mt-4">
					<Link to="/auth/login">Back to Login</Link>
				</p>
			</div>
		</div>
	);
};

export default ForgotPassword;
