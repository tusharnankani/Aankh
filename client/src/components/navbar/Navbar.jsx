import React from 'react';
import logo from './../../assets/logofont.svg';
import './navbar.css';

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/">Blog</a>
		</p>
		<p>
			<a href="/">Product</a>
		</p>
		<p>
			<a href="/">Community</a>
		</p>
		<p>
			<a href="/">Pricing</a>
		</p>
		<p>
			<a href="/">Contact Us</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo">
				<img src={logo} alt="aankh-logo" />
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
