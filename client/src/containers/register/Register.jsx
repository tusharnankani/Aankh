import React from 'react';
import './register.css';
import logo from './../../assets/logofont.svg';
import { CommonInput, CtaButton, WebcamCapture } from '../../components';

const inputField = [ 'Email ID', 'Full Name', 'Password' ];

const Register = () => {
	return (
		<div className="user-register">
			<div className="logo">
				<img src={logo} alt="aankh-logo" />
			</div>
			<div className="register-form">
				<h1 className="title-heading">Register</h1>
				<div className="input-fields">
					{inputField.map((item) => (
						<CommonInput placeholderText={item} />
					))}
				</div>
				<div className="image-capture">
					<WebcamCapture />
				</div>
				<CtaButton text="Register" />
			</div>
		</div>
	);
};

export default Register;
