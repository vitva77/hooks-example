import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div className="text-center py-3">
			My theme is <strong className="text-uppercase">{theme}</strong>
			<p>
				<button onClick={toggleTheme} className="btn btn-outline-primary my-3">
					Toggle theme
				</button>
			</p>
		</div>
	);
};

export default ThemeToggle;
