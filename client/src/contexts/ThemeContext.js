import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [ theme, setTheme ] = useState('default');

	const toggleTheme = () => {
		// theme === 'default' ? setTheme('first') : setTheme('default');
		if (theme === 'default') {
			window.localStorage.setItem('theme', 'first');
			setTheme('first');
		} else {
			window.localStorage.setItem('theme', 'default');
			setTheme('default');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		if (localTheme) {
			setTheme(localTheme);
		}
	}, []);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
