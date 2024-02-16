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


export interface ISPC {
    countries : string[];
    sessions : {
        country : string,
        count: any
    }[];
}
type propType = {
    spc: ISPC;
}

const SessionsPerCountry = ({spc}:propType) => {
    const labels = spc.sessions.sort((a,b) => b.count - a.count ).map(e => e.country);
    const data = {
        labels,
        datasets: [
            {
                label: 'Number of Sessions',
                data: spc.sessions.sort((a,b) => b.count - a.count ).map(e => e.count),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ]
    }
    return <Bar data={data} />;
};

export default SessionsPerCountry;
