// src/components/PieChart.jsx
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  const chartRef = useRef(null);
  const isMobile = window.innerWidth < 768; // Simple mobile detection

  // Cleanup chart on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? 'bottom' : 'right',
        labels: {
          padding: isMobile ? 10 : 15,
          font: {
            size: isMobile ? 10 : 12
          },
          boxWidth: isMobile ? 12 : 15,
          usePointStyle: true
        }
      },
      tooltip: {
        bodyFont: {
          size: isMobile ? 10 : 12
        },
        titleFont: {
          size: isMobile ? 10 : 12
        },
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: isMobile ? '50%' : '65%',
    radius: isMobile ? '80%' : '90%'
  };

  return (
    <div style={{
      height: isMobile ? '250px' : '300px',
      width: '100%',
      position: 'relative'
    }}>
      <Pie
        ref={chartRef}
        data={data}
        // options={options}
      />
    </div>
  );
}