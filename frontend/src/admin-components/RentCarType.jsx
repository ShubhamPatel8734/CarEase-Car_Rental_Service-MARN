import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Sedan', 'Sports', 'SUV', 'Luxury'],
  datasets: [
    {
      label: 'No of Cars',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(34, 34, 34, 1)',
      borderColor: 'rgba(245, 183, 84, 1)', 
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
      text: 'Rent by Car Types',
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
        text: 'Car Type',
        font: {
          size: 16,
        },
        
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
        text: 'No of Cars on Rent',
        font: {
          size: 16,
        },
        beginAtZero: true,
      },
    },
  }
};

const RentCarType = () => {
  return (
    <div>
        <Bar data={data} options={options} style={{height: '500px'}}/>
    </div>
  )
}

export default RentCarType