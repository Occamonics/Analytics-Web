import React, {useEffect, useState} from 'react';
import {getTopIntents} from "../../lib/api/insights.api";
import {Bar} from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, ArcElement, LineElement, PointElement, BarElement, Tooltip} from 'chart.js';
import {Breadcrumb} from "antd";

Chart.register(CategoryScale, LinearScale, ArcElement, LineElement, PointElement, BarElement, Tooltip);

const DailySessions = () => {

    const [data, setData] = useState<any>({
        labels: [],
        datasets: [{
            label: [],
            data: [],
            borderWidth: 1
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            const {success, data, message} = await getTopIntents();
            if (success) {
                const labels = Object.keys(data);
                const values = Object.values(data);
                setData({
                    labels,
                    datasets: [{
                        label: message,
                        data: values,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                    }],
                    borderWidth: 1
                });
            } else
                setData({});
        }
        fetchData();
    }, []);

    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Analysis</Breadcrumb.Item>
                <Breadcrumb.Item>Top Intents</Breadcrumb.Item>
            </Breadcrumb>
            <Bar
                data={data}
                options={{
                    responsive: true,
                    plugins : {
                        tooltip : {
                            enabled: true,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    );
};

export default DailySessions;
