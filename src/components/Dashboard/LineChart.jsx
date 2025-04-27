// src/components/LineChart.jsx
import { Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LineChart({ data }) {
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
        position: 'top',
        labels: {
          font: {
            size: isMobile ? 10 : 12
          }
        }
      },
      tooltip: {
        bodyFont: {
          size: isMobile ? 10 : 12
        },
        titleFont: {
          size: isMobile ? 10 : 12
        }
      }
    },
    scales: {
      x: {
        ticks: {
          maxRotation: isMobile ? 45 : 0,
          font: {
            size: isMobile ? 10 : 11
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          font: {
            size: isMobile ? 10 : 11
          },
          // Compact numbers on mobile
          callback: value => isMobile && value > 999 ? `${(value/1000).toFixed(1)}k` : value
        }
      }
    },
    elements: {
      point: {
        radius: isMobile ? 3 : 4,
        hoverRadius: isMobile ? 5 : 6
      },
      line: {
        borderWidth: isMobile ? 1.5 : 2
      }
    }
  };

  return (
    <div 
      style={{ 
        width: '100%', 
        height: isMobile ? '200px' : '300px', 
        position: 'relative',

      }}>
      <Line 
        ref={chartRef}
        data={data}
        // options={options}
      />
    </div>
  );
}