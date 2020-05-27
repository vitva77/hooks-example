import React from 'react';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
	return (
		<nav className="navbar fixed-bottom navbar-light bg-light">
			<div className="container">
				<ThemeToggle />
			</div>
		</nav>
	);
};

export default Footer;
