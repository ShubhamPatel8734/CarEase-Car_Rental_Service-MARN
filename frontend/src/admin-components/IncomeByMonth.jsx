import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement, Filler, Colors } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            type: 'line',
            label: 'Monthly Profit',
            data: [ 65, 59, 80, 81, 56, 55, 40, 45, 49, 60, 70, 46],
            borderColor: 'rgba(245, 183, 84, 1)',
            backgroundColor: 'rgba(245, 183, 84, 1)',
            fill: true,
            borderwidth: 2,
            tension: 0.4,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointRadius: 6, 
            pointHoverRadius: 8,  
            pointBorderColor: '#fff', 
            pointBorderWidth: 2,
        },
    ],
}

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', 
      },
      title: {
        display: true,
        text: 'Sales Over Months',
      },
    },
    scales: {
      x: {
        // grid: {
        //   color: 'rgba(255, 255, 255, 0.5)',
        // },
        border: {
          color: 'rgba(245, 183, 84, 1)', 
        },
        ticks: {
          color: 'rgba(245, 183, 84, 1)', 
        },
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        // grid: {
        //   color: 'rgba(255, 255, 255, 0.5)',
        // },
        border: {
          color: 'rgba(245, 183, 84, 1)', 
        },
        ticks: {
          color: 'rgba(245, 183, 84, 1)', 
        },
        title: {
          display: true,
          text: 'Value in INR (₹)',
        },
        beginAtZero: true, 
      },
    },
  };

const IncomeByMonth = () => {
  return (
    <div>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default IncomeByMonth