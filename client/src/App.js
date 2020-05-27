import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import './themes/default/style.scss';
import './themes/first/style.scss';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
	return (
		<ThemeContextProvider>
			<Router>
				<Navbar />
				<div className="container mt-5">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
					</Switch>
				</div>
			</Router>
		</ThemeContextProvider>
	);
}

export default App;
