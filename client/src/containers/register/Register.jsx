import React from 'react';
import './register.css';
import logo from './../../assets/logofont.svg';
import { CommonInput, CtaButton } from '../../components';

const inputField = [
	'Email ID',
	'Organization Name',
	'Test Name',
	'Question Paper Link',
	'Total Expected Candidates',
	'Start Date-Time Format',
	'Duration'
];

const Register = () => {
	return (
		<div className="user-register">
			<div className="logo">
				<img src={logo} alt="aankh-logo" />
			</div>
			<div className="create-form">
				<h1 className="title-heading">Create a test</h1>
				<div className="input-fields">
					{inputField.map((item) => (
						<CommonInput placeholderText={item} />
					))}
				</div>

				<CtaButton text="Create" />
			</div>
		</div>
	);
};

export default Register;
