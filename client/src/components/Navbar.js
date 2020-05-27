import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<span className="navbar-brand mb-0 h1 text-uppercase">.Copybook</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink exact to={'/'} className="nav-link">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={'/about'} className="nav-link">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={'/contact'} className="nav-link">
								Contact
							</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to={'/login'} className="nav-link">
								Log in
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={'/signup'} className="nav-link">
								Sign up
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
