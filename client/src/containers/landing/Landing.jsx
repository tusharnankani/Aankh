import React from 'react';
import { Navbar, CtaButton, CommonInput } from './../../components';
import './landing.css';

const Landing = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="section-type landing-page">
				<div className="landing-content">
					<div className="headings">
						<span className="sub-text">Advanced & Automated</span>
						<span className="main-heading gradient-text">
							Proctoring Solution
						</span>
					</div>
					<p className="desc">
						A straightforward framework built for online proctoring
						to create online tests within minutes,{' '}
						<i>effortlessly</i>.
					</p>
				</div>
				<div className="landing-cta">
					<CtaButton text="Create a test" />
					<p className="desc">OR</p>
					<div className="input-item unique-link">
						<CommonInput placeholderText="Unique test link?" />
						<span className="join-link">
							<a href="/">Join</a>
						</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Landing;
