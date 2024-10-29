import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProfileStatChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chart = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: false, // Label for the dataset
        data: [
          500, 1000, 1500, 1250, 1750, 2000, 2133, 1030, 995, 1234, 6523, 8123,
          2113,
        ], // Y-axis values
        borderColor: "#008080", // Line color
        fill: false, // No fill under the line
        tension: 0.4,
        pointRadius: 0,
        // pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "#b0d8d8",
          lineWidth: 1,
          borderDash: [10, 5], // Dashed line for the x-axis
          drawBorder: true,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="lg:h-[400px] md:h-[300px] h-[240px] w-full">
      <Line data={chart} options={options} key={windowWidth} />
    </div>
  );
};

export default ProfileStatChart;
