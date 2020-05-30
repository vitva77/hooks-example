import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';

//import './themes/default/style.scss';
import './themes/first/style.scss';

import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BackToHome from './components/BackToHome';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
// import NotFoundPage from './pages/NotFoundPage';

const NavbarShow = () => {
	let location = useLocation();
	if (
		location.pathname === '/auth/signup' ||
		location.pathname === '/auth/login' ||
		location.pathname === '/auth/forgot-password'
	) {
		return <BackToHome />;
	} else {
		return <Navbar />;
	}
};

const App = () => {
	return (
		<ThemeContextProvider>
			<Router>
				<NavbarShow />
				<div className="container mt-5">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/auth/login" component={Login} />
						<Route path="/auth/forgot-password" component={ForgotPassword} />
						<Route path="/auth/signup" component={Signup} />
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</div>
			</Router>
		</ThemeContextProvider>
	);
};

export default App;
