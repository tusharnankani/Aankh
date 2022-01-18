import React from 'react';
import './ctabutton.css';

const CtaButton = ({ text = 'Get Started' }) => {
	return <button className="ctabutton">{text}</button>;
};

export default CtaButton;
