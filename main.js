//This file will act like an entry point to the lib


import {LineChart} from './Charts/LineChart';
//  repeat for every process
export const ChartLib={
    LineChart,
}
// Usage ins
// import { ChartsLib } from './ChartsLib/index.js';
//
// const container = document.getElementById('chart-container');
// const chart = new ChartsLib.LineChart(container, {
//     data: {
//         labels: ['Jan', 'Feb', 'Mar'],
//         datasets: [{ label: 'Sales', data: [10, 20, 30], backgroundColor: 'blue' }]
//     },
//     options: {
//         title: { text: 'Monthly Sales', display: true }
//     }
// });