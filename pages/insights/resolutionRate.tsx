import React, {useEffect, useRef} from 'react';
import {Breadcrumb} from "antd";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, RadialLinearScale, Filler, PointElement, LineElement} from 'chart.js';
import {Chart, Doughnut} from 'react-chartjs-2';
import _default from "chart.js/dist/plugins/plugin.filler";
import beforeDraw = _default.beforeDraw;

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
    PointElement,
    LineElement
);


const ResolutionRate = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart: any = chartRef.current;

        if (chart) {
            console.log('CanvasRenderingContext2D', chart.ctx);
            console.log('HTMLCanvasElement', chart.canvas);
        }
    }, []);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'My Dataset',
            data: [10, 20, 15, 30, 25, 40],
            borderColor: 'blue',
            backgroundColor: ['blue', 'blue', 'blue', 'blue', 'red', 'red'], // Set the last segment to a different color
            borderWidth: 2
        }]
    };
    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Analysis</Breadcrumb.Item>
                <Breadcrumb.Item>Resolution Rate</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{height:"90vh"}}  >
                <Chart ref={chartRef}
                       type='line'
                       data={data}
                       options={{

                        }}
                />
            </div>

        </div>
    );
};

export default ResolutionRate;
