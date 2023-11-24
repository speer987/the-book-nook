// With help from this video: https://www.youtube.com/watch?v=cxKNhSzxafg

import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

// https://stackoverflow.com/a/58270046 to get the last 14 days:
let startDate = new Date();
let endDate = new Date();
startDate.setDate(startDate.getDate() - 14);
startDate.setHours(0, 0, 0, 0);

export default function LineChart(pages, progress) {
  const total_pages = pages.pages;
  console.log(progress);
  //   let userData = [];
  //   userData = userData.push(progress);
  //   console.log(userData);
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        labels: "Pages Read",
        data: [],
        backgroundColor: "teal",
        borderColor: "teal",
        pointBorderColor: "teal",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: total_pages,
      },
    },
  };

  return <Line data={data} options={options} />;
}
