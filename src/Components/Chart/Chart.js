import React from 'react';
import Pie from "react-chartjs-2";

function Chart(props) {
    return (
        <Pie data={props.chartData} />
    );
}

export default Chart;