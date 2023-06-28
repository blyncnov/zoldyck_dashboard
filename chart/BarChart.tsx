import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  type: "line",
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: true,
      suggestedMin: 0,
      suggestedMax: 0,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Perfomance Visual Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Performance",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: "#4AC3C6",
      backgroundColor: "rgba(255, 255, 255,0)",
      fill: true,
      tension: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="chart_container">
      <h3>Performance</h3>
      <Line options={options} data={data} updateMode={"resize"} />
    </div>
  );
};

export default BarChart;
