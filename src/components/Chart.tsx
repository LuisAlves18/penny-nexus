
"use client"
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSliderChart } from "@/contexts/SliderChartContext";

export default function ChartRender() {
    Chart.register(...registerables);
    const { initialAmount, incrementAmount, timeSpan } = useSliderChart();
    const handleData = (initialAmount:number, incrementAmount:number, timeSpan:number) => {
        let dataPoints:Array<number> = [];
        let currentVal = 0;
      
        handleTimeSpan(timeSpan).forEach(() => {
          const pushValue = currentVal + incrementAmount;
          dataPoints.push(pushValue);
          currentVal = pushValue;
        });
      
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = dataPoints.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [dataPoints[i], dataPoints[j]] = [dataPoints[j], dataPoints[i]];
        }
        console.log("not shuffled",dataPoints);
      
        // Calculate cumulative sum
        dataPoints.reduce((acc, value, index) => {
          dataPoints[index] = acc + value;
          return acc + value;
        }, 0);
      console.log("shuffled",dataPoints);
        return dataPoints;
      };
    
const handleTimeSpan: (timeSpan: number) => Array<string> = (timeSpan:number) =>{
    let data = [] 
    for (let index = 1; index < timeSpan+1; index++) {
        data.push(index.toString())
    }
    return data as Array<string>
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