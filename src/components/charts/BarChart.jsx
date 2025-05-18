import React from 'react';
import { Bar } from 'react-chartjs-2';

export function BarChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Number of Applications',
        data: data.data,
        backgroundColor: 'rgba(59, 130, 246, 0.5)', // Blue color
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Application Trends'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
} 