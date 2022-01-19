import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './webcamcapture.css';

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user'
};

const WebcamCapture = () => {
	const webcamRef = React.useRef(null);
	const [ image, setImage ] = useState('');
	const capture = React.useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			setImage(imageSrc);
		},
		[ webcamRef ]
	);

	return (
		<React.Fragment>
			{image === '' ? (
				<Webcam
					audio={false}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					height={300}
					width={450}
					videoConstraints={videoConstraints}
				/>
			) : (
				<img className="captured" src={image} alt="captured" />
			)}

			{image === '' ? (
				<button onClick={capture}>Capture photo</button>
			) : (
				<button className="proceed" href="/login">
					Proceed
				</button>
			)}
		</React.Fragment>
	);
};

export default WebcamCapture;
