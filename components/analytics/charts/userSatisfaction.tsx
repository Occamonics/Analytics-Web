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

const labels = [
        '02-01', '03-01', '04-01',
        '05-01', '08-01', '09-01',
        '10-01', '11-01', '12-01',
        '15-01', '16-01', '17-01',
        '18-01', '19-01', '20-01',
        '22-01', '23-01', '24-01',
        '25-01', '26-01', '28-01',
        '29-01', '30-01', '31-01'
    ]
;

export const data = {
    labels,
    datasets: [
        // {
        //     label: "Total Logins",
        //     data: [
        //         8, 13, 14, 10, 14,  7,  8,  5,
        //         5,  8,  7,  8,  5,  9,  1, 17,
        //         12,  9, 10,  8,  1, 69, 46, 17
        //     ],
        //     borderColor: 'rgb(99,255,107)',
        //     backgroundColor: 'rgba(128,255,99,0.5)',
        // },

        {
            label: 'First Time',
            data: [
                8, 13, 14, 9, 14, 7, 8, 4,
                5, 8, 5, 7, 5, 9, 1, 15,
                10, 8, 8, 7, 1, 64, 41, 14
            ],
            // // borderColor: 'rgb(255, 99, 132)',
            // // backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            stack: "stack 1"

        },
        // {
        //     label: 'Returned Same Day',
        //     data: [
        //         1, 0, 0, 0, 0, 0, 0, 0,
        //         0, 0, 0, 1, 0, 0, 0, 0,
        //         0, 1, 1, 0, 0, 0, 1, 0
        //     ],
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
        {
            label: 'Returned',
            data: [
                0, 0, 0, 1, 0, 0, 0, 1,
                0, 0, 2, 1, 0, 0, 0, 2,
                2, 1, 2, 1, 0, 5, 5, 3
            ],
            // borderColor: 'rgb(235,171,53)',
            // backgroundColor: 'rgba(235,193,53,0.5)',
            borderColor: 'rgb(99,255,107)',
            backgroundColor: 'rgba(128,255,99,0.5)',
            stack: "stack 1",
        },
    ],
};


export function UserSatisfaction() {
    const [chartType, setChartType] = useState('bars');

    return <div>
        <Radio.Group value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <Radio.Button value="lines">Lines</Radio.Button>
            <Radio.Button value="bars">Bars</Radio.Button>
        </Radio.Group>
        {/*@ts-ignore*/}
        {chartType == 'lines' ? <Line options={options} data={data}/> : <Bar options={options} data={data}/>}

    </div>
}
