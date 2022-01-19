import React from 'react';
import logo from './../../assets/logofont.svg';
import { CopyLink } from '../../components';
import './dashboard.css';

const mockTests = [
	{
		name: 'Periodic Test - DBMS',
		link: 'http://google.com',
		time: '19/01/2022 17:30'
	},
	{
		name: 'Periodic Test - DBMS',
		link: 'http://google.com',
		time: '20/01/2022 17:30'
	},
	{
		name: 'Periodic Test - DBMS',
		link: 'http://google.com',
		time: '21/01/2022 17:30'
	}
];

const Dashboard = () => {
	return (
		<div className="section-type admin-dashboard">
			<div className="logo">
				<img src={logo} alt="aankh-logo" />
			</div>

			<h1 className="title-heading">Admin Dashbaord</h1>

			<div className="test-dashboard">
				<h2 className="title-heading">Tests</h2>

				<div className="test-items">
					{mockTests.map((test) => (
						<div className="test-item">
							<h4 className="test-time">{test.time}</h4>

							<h4 className="test-name">
								<a href="/status">{test.name}</a>
							</h4>

							<CopyLink link={test.link} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
