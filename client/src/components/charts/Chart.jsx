import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
	labels: [ 'January', 'February', 'March', 'April', 'May' ],
	datasets: [
		{
			label: 'Volunteers',
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: [ 65, 62, 70, 68, 72 ]
		}
	]
};

export default class Chart extends React.Component {
	render() {
		return (
			<div>
				<Bar
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Volunteers per month',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		);
	}
}
