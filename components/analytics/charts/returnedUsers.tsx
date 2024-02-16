import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import {Radio} from 'antd';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Date',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Number of Users',
            },
        },
    },
};


interface IUserReturns {
    labels: string[];
    firstTimeData: number[];
    returnedData: number[];
}
type propType = {
    userReturns: IUserReturns
}

export function ReturnedUsers({userReturns}: propType) {
    const [chartType, setChartType] = useState('bars');
    console.log(userReturns);
    const data = {
        labels: userReturns.labels,
        datasets: [
            {
                label: 'First Time',
                data: userReturns.firstTimeData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                stack: "stack 1"

            },
            {
                label: 'Returned',
                data: userReturns.returnedData,
                borderColor: 'rgb(99,255,107)',
                backgroundColor: 'rgba(128,255,99,0.5)',
                stack: "stack 1",
            },
        ],
    };

    return <div>
        <Radio.Group value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <Radio.Button value="lines">Lines</Radio.Button>
            <Radio.Button value="bars">Bars</Radio.Button>
        </Radio.Group>
        {/*@ts-ignore*/}
        {chartType == 'lines' ? <Line options={options} data={data}/> : <Bar options={options} data={data}/>}

    </div>
}
