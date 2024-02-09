import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);


type propType = {
    resultPercentages: {
        Satisfactory: number;
        "Needs Improvement": number,
        Incorrect: number,
        // "ToDo": number
    } | any
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
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],


    };


    // const options = {
    //     plugins: {
    //         datalabels: {
    //             backgroundColor: function (context: any) {
    //                 return context.dataset.backgroundColor;
    //             },
    //             borderColor: 'white',
    //             borderRadius: 25,
    //             borderWidth: 2,
    //             color: 'white',
    //             display: function (context: any) {
    //                 var dataset = context.dataset;
    //                 var count = dataset.data.length;
    //                 var value = dataset.data[context.dataIndex];
    //                 return value > count * 1.5;
    //             },
    //             font: {
    //                 weight: 'bold'
    //             },
    //             padding: 6,
    //             formatter: Math.round
    //         }
    //     },
    //
    //     // Core options
    //     aspectRatio: 4 / 3,
    //     cutoutPercentage: 32,
    //     layout: {
    //         padding: 32
    //     },
    //     elements: {
    //         line: {
    //             fill: false
    //         },
    //         point: {
    //             hoverRadius: 7,
    //             radius: 5
    //         }
    //     },
    // }

    const options = {
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                formatter: (value:any, ctx:any) => {

                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map((data:any) => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(2)+"%";
                    return percentage;


                },
                color: '#000000',
            }
        }
    };



    return (
        <div style={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {/* @ts-ignore*/}
            <Doughnut data={data} style={{}} options={options}/>
        </div>
    );
};

export default ResolutionRate;
