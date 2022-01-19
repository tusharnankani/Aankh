import React from 'react';
import './terminated.css';

const Terminated = ({
	studentID = '1902112',
	warningCnt = '4',
	message = 'Multiple People Detected'
}) => {
	return (
		<div className="terminated">
			<div className="terminated-details">
				<h4 className="student-id">ID: {studentID}</h4>
				<h4 className="warning-cnt">Warnings: {warningCnt}</h4>
				<h4 className="message">Message: {message}</h4>
			</div>
			<div className="btns">
				<button className="terminate-btn">Terminate</button>
				<button className="continue-btn">Continue</button>
			</div>
		</div>
	);
};

export default Terminated;
