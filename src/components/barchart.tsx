'use client'

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  labelBarchart: string[]
  dataBarchart: number[]
  title: string
}

const BarChart: React.FC<BarChartProps> = ({labelBarchart, dataBarchart, title}) => {
  const data = {
    labels: labelBarchart,
    datasets: [
      {
        label: title,
        data: dataBarchart,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
    <Bar data={data} options={options} />
    </>
  );
};

export default BarChart

