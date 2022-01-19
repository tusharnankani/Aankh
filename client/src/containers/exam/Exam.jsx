import React from 'react';
import { Timer } from './../../components';
import './exam.css';

const Exam = ({
	examName = 'Periodic Test - AI: 17th January, 2022',
	studentID = '1902112',
	studentEmail = 'tushar12@gmail.com',
	duration = 60
}) => {
	return (
		<div className="exam-container">
			<div className="exam-details">
				<h3 className="title-heading">Student Details</h3>

				<div className="details">
					<h4 className="student-id">Student ID: {studentID}</h4>
					<h4 className="student-email">
						Student Email: {studentEmail}
					</h4>
				</div>
			</div>

			<div className="embedded-form">
				{/* add blur to disable to class, remove hide */}
				<div className="hide">
					<h2>Message: People Detected</h2>
					<h2>Warnings: 4</h2>

					<h1>Exam Terminated</h1>
				</div>

				{/* add blur to class */}
				<div className="form">
					<h2 className="title-heading">{examName}</h2>
					<iframe
						title={examName}
						className="form-link"
						src="https://docs.google.com/forms/d/e/1FAIpQLScGieRkiR-718h3RwfOmLBRxLd8c8rySsYB8L4yE00rZc95CA/viewform?embedded=true"
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
