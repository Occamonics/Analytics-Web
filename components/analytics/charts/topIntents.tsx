import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {

    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};


export interface IIntentResolution {
    intent : string;
    sum : number;
    satisfactory: number;
    unsatisfactory: number;
}
type propType = {
    intentsResolution: IIntentResolution[];
}
const TopIntent = ({intentsResolution} : propType) => {
    const sort_trim_data = intentsResolution.sort((a, b) => b.sum - a.sum).slice(0,7);
    const labels = sort_trim_data.map(i => i.intent);
    const data = {
        labels,
        datasets: [
            {
                label: 'Satisfactory',
                data: sort_trim_data.map(i => i.satisfactory),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                stack: 'Stack 0',
            },
            {
                label: 'Incorrect',
                data: sort_trim_data.map(i => i.unsatisfactory),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor:'rgba(255, 99, 132, 1)',
                stack: 'Stack 0',
            },
        ]
    }

    return <Bar options={options} data={data} />;
}


export default TopIntent;