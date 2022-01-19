import React from 'react';
import { useState, useEffect } from 'react';

const Timer = ({ initialMinute = 1, initialSeconds = 0 }) => {
	const [ minutes, setMinutes ] = useState(initialMinute);
	const [ seconds, setSeconds ] = useState(initialSeconds);
	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<React.Fragment>
			{minutes === 0 && seconds === 0 ? null : (
				<h2 className="title-heading">
					{' '}
					{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
				</h2>
			)}
		</React.Fragment>
	);
};

export default Timer;
