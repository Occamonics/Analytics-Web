import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {Breadcrumb} from "antd";

ChartJS.register(ArcElement, Tooltip, Legend);


type propType = {
    resultPercentages: {
        Satisfactory: number;
        "Needs Improvement": number,
        Incorrect: number,
        "ToDo": number
    }
}

const ResolutionRate = ({resultPercentages}: propType) => {
    let labels: string[] = [];
    let percentages: number[] = [];

    for (let key in resultPercentages) {
        labels.push(key);
        // @ts-ignore
        percentages.push(resultPercentages[key]);
    }
    const data = {
        labels,
        datasets: [
            {
                label: "percentage",
                data: percentages,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Analysis</Breadcrumb.Item>
                <Breadcrumb.Item>Resolution Rate</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{height: "90vh"}}>
                <Doughnut data={data}/>
            </div>
        </div>
    );
};

export default ResolutionRate;
