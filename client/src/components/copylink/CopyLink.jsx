import React from 'react';
import { CommonInput } from '..';
import './copylink.css';

const CopyLink = ({ link = 'http://github.com' }) => {
	return (
		<div className="copy-link">
			<div className="copy-link-input">
				<CommonInput value={link} />
			</div>
			<button
				className="copy-btn"
				onClick={(e) => {
					navigator.clipboard.writeText(link);
					e.target.innerHTML = 'Copied!';
					setTimeout(function() {
						e.target.innerHTML = 'Copy';
					}, 2000);
				}}
			>
				Copy
			</button>
		</div>
	);
};

export default CopyLink;
