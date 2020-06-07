import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Lines } from 'react-preloaders';

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
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/auth/login" component={Login} />
						<Route exact path="/auth/forgot-password" component={ForgotPassword} />
						<Route exact path="/auth/signup" component={Signup} />
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</div>
				<Lines background="#f5f5f5" color="#7e57c2" />
			</Router>
		</ThemeContextProvider>
	);
};

export default App;
