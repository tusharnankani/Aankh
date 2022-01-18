import React from 'react';
import logo from './../../assets/logofont.svg';
import { CommonInput, CtaButton } from '../../components';
import './create.css';

const inputField = [
	'Email ID',
	'Organization Name',
	'Test Name',
	'Question Paper Link',
	'Total Expected Candidates',
	'Start Date-Time Format',
	'Duration'
];

const Create = () => {
	return (
		<div className="client-create">
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

export default Create;
