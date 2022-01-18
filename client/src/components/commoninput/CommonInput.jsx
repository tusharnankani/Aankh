import React from 'react';
import './commoninput.css';
import { useState } from 'react';

const CommonInput = ({ placeholderText = 'Input' }) => {
	// const [ text, setText ] = useState('');

	return (
		<input
			type="text"
			placeholder={placeholderText}
			// value={text}
			// onChange={(e) => setText(e.target.value)}
		/>
	);
};

export default CommonInput;
