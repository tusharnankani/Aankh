import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';

const state = {
	labels: [ 'Terminated', 'Warnings > 4', 'Warnings > 1', 'Continue' ],
	datasets: [
		{
			label: 'Events',
			backgroundColor: [ '#ef476f', '#ffd166', '#06d6a0', '#118ab2' ],
			hoverBackgroundColor: [
				'#501800',
				'#4B5000',
				'#175000',
				'#003350'
			],
			data: [ 1, 4, 8, 48 ]
		}
	]
};

export default class PieChart extends React.Component {
	render() {
		return (
			<div className="two-charts">
				<Pie
					data={state}
					options={{
						title: {
							display: true,
							text: 'Students with warnings',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>

				{/* <Doughnut
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Events per month',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/> */}
			</div>
		);
	}
}
