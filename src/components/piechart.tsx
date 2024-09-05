'use client'

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
  labelBarchart: string[]
  dataBarchart: number[]
  title: string
}

const PieChart: React.FC<PieChartProps> = ({labelBarchart, dataBarchart, title}) => {
  const data = {
    labels: labelBarchart,
    datasets: [
      {
        label: title,
        data: dataBarchart,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {

      datalabels: {
        color: 'text-gray-500',
        display: true,
        formatter: (value: number, context: any) => {
          const total = context.chart._metasets[context.datasetIndex].total;
          const percentage = (value / total * 100).toFixed(2) + '%';
          return percentage;
        },  
      },
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const label = tooltipItem.label || '';
            if (label) {
              return `${label}: ${tooltipItem.raw}`;
            }
            return '';
          },
        },
      },
    },
  };

  return (
    <>
    <p className='text-center text-xs font-medium text-gray-500'>{title}</p>
      <Pie data={data} options={options}/>
    </>
  );
};

export default PieChart