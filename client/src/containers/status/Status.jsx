import React from 'react';
import logo from './../../assets/logofont.svg';
import { CopyLink, Terminated, Chart, PieChart } from '../../components';
import './status.css';

const mockList = [
	{
		studentID: '1902112',
		warningCnt: 5,
		message: 'Multiple people detected'
	},
	{
		studentID: '1902141',
		warningCnt: 4,
		message: 'Noise detected'
	},
	{
		studentID: '1902114',
		warningCnt: 6,
		message: 'Face covered'
	},
	{
		studentID: '1902154',
		warningCnt: 2,
		message: 'DevTools Opened'
	}
];

const Status = ({
	time = '19/01/2022 17:30',
	name = 'Periodic Test - DBMS',
	link = 'http://google.com'
}) => {
	return (
		<div className="status-dashboard">
			<div className="logo">
				<img src={logo} alt="aankh-logo" />
			</div>

			<h1 className="title-heading">Test Dashboard</h1>

			<div className="test-details">
				<div className="test-item">
					<h4 className="test-time">{time}</h4>

					<h4 className="test-name">{name}</h4>

					<CopyLink link={link} />
				</div>
			</div>
			<div className="charts">
				<PieChart />
			</div>
			<div className="terminated-students">
				<h2 className="title-heading">Students Terminated</h2>
				<div className="terminated-boxes">
					{mockList.map((item) => (
						<Terminated props={item} key={item.studentID} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Status;
