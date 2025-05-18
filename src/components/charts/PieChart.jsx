import React from 'react';
import { Pie } from 'react-chartjs-2';

export function PieChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',  // Blue
          'rgba(16, 185, 129, 0.5)',  // Green
          'rgba(239, 68, 68, 0.5)',   // Red
          'rgba(245, 158, 11, 0.5)',  // Yellow
          'rgba(139, 92, 246, 0.5)',  // Purple
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Startup Distribution by Industry'
      }
    }
  };

  return <Pie data={chartData} options={options} />;
} 