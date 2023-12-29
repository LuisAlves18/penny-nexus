
"use client"
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSliderChart } from "../contexts/SliderChartContext";
import { log } from 'console';

export default function ChartRender() {
    Chart.register(...registerables);
    const { initialAmount, incrementAmount, timeSpan } = useSliderChart();
    const handleData = (initialAmount:number, incrementAmount:number, timeSpan:number) => {
        let dataPoints:Array<number> = [];
        let currentVal = 0;
      
        handleTimeSpan(timeSpan).forEach(() => {
          const pushValue = Number(currentVal) + Number(incrementAmount);
          dataPoints.push(pushValue);
          currentVal = pushValue;
        });
      
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = dataPoints.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [dataPoints[i] as number, dataPoints[j]as number] = [dataPoints[j] as number, dataPoints[i] as number];
        }
      
        // Calculate cumulative sum
        dataPoints.reduce((acc, value, index) => {
          dataPoints[index] = acc + value;
          return acc + value;
        }, 0);
        return dataPoints;
      };
    
const handleTimeSpan: (timeSpan: number) => Array<number> = (timeSpan:number) =>{
    let data:Array<number> = [] 
    
    for (let index = 1; index < Number(timeSpan)+1; index++) {
        data.push(index)
    }
    console.log("data",data)
    return data as Array<number>
}

const data = {
  labels: handleTimeSpan(timeSpan),
  datasets: [{
    label: 'My First Dataset',
    data: handleData(initialAmount,incrementAmount,timeSpan),
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

    return (
        <div className="dashboard">
          <h1>Real-time Dashboard</h1>
          <Line data={data} />
        </div>
      );
}