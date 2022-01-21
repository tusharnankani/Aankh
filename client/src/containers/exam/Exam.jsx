import React, { useState } from 'react';
import { Timer, WebLiveCapture } from './../../components';
import devtools from './../../../node_modules/devtools-detect/index.js';
import './exam.css';

const Exam = ({
	examName = 'Periodic Test - DBMS: 20th January, 2022',
	studentID = '1902112',
	studentEmail = 'tusharnankani3@gmail.com',
	duration = 60,
	formLink = 'https://docs.google.com/forms/d/e/1FAIpQLScGieRkiR-718h3RwfOmLBRxLd8c8rySsYB8L4yE00rZc95CA/viewform'
}) => {
	function captureCheck() {
		// defualt hidden
		let btn = document.querySelector(
			'#root > div > div > div.left-column > div.image-capture > button'
		);
		btn.click();
	}

	function check() {
		if (!window.screenTop && !window.screenY && isFullScreen) {
			// window.alert(
			// 	'Your exam will terminate. Please go to full screen mode.'
			// );
			// console.log('Not full screen');
			setIsFullScreen(false);
		}

		if (!isFullScreen) {
			setWarningCnt(warningCnt + 1);
			setShowMessage(
				'Your exam will terminate. Please go to full screen mode.'
			);
			disableForm();
		} else {
			enableForm();
		}

		terminateExam();
	}

	// THERE IS BUG HERE :'))

	let overlay = document.getElementById('overlay');
	let formBlur = document.getElementById('form-blur');

	function disableForm() {
		overlay.classList.remove('hide');
		overlay.classList.add('disable');
		formBlur.classList.add('blur');
	}

	function enableForm() {
		overlay.classList.add('hide');
		overlay.classList.remove('disable');
		formBlur.classList.remove('blur');
	}

	function terminateExam() {
		if (warningCnt > 5) {
			disableForm();
			overlay.classList.add('terminate');
		}
	}

	const [ warningCnt, setWarningCnt ] = useState(0);
	const [ isDevToolsOpen, setIsDevToolsOpen ] = useState(false);
	const [ isFullScreen, setIsFullScreen ] = useState(true);
	const [ showMessage, setShowMessage ] = useState('');

	// TO EMBED
	formLink += '?embedded=true';

	// Get notified when it's opened/closed or orientation changes
	window.addEventListener('devtoolschange', (event) => {
		// console.log('Is DevTools open:', event.detail.isOpen);
		// console.log('DevTools orientation:', event.detail.orientation);
		if (event.detail.isOpen) {
			setWarningCnt(warningCnt + 1);
			setIsDevToolsOpen(true);
		}

		if (!isDevToolsOpen) {
			setShowMessage('Your exam will terminate. Please close devtools.');
			disableForm();
		} else {
			enableForm();
		}

		terminateExam();
	});

	// Full screen check
	setInterval(check, 10000);

	// Image Capture
	setInterval(captureCheck, 20000);

	return (
		<div className="exam-container">
			<div className="left-column">
				{/* default hidden */}
				<div className="image-capture">
					<WebLiveCapture />
				</div>
				<div className="exam-details">
					<h3 className="title-heading">Student Details</h3>

					<div className="details">
						<h4 className="student-id">Student ID: {studentID}</h4>
						<h4 className="student-email">
							Student Email: {studentEmail}
						</h4>
					</div>
				</div>
			</div>

			<div className="embedded-form">
				{/* add disable to class, remove hide */}
				<div className="hide" id="overlay">
					<h2>Message: {showMessage}</h2>
					<h2>Warnings: {warningCnt}</h2>

					<h1>Exam Terminated</h1>
					<h3>Please contact your organization/admin.</h3>
				</div>

				{/* add blur to class */}
				<div className="form" id="form-blur">
					<h2 className="title-heading">{examName}</h2>
					<iframe
						title={examName}
						className="form-link"
						src={formLink}
					>
						Form
					</iframe>

					<div className="responsive-message">
						<h1>
							Please join via a Laptop/PC for best performance
						</h1>
					</div>
				</div>
			</div>

			<div className="timer">
				<Timer initialMinute={duration} />
			</div>
		</div>
	);
};

export default Exam;
