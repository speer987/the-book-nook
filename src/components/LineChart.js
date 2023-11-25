// With help from this video: https://www.youtube.com/watch?v=cxKNhSzxafg
// Note: I also had to use a lot of ChatGPT to figure out how to work this Chart JS library, because I've never used this library before.
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { doc, onSnapshot } from "firebase/firestore";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function LineChart({ book, db }) {
  let [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, book?.id), (doc) => {
      setUserData(doc.data());
    });
    return () => unsubscribe();
  }, [db, book?.id]);
  console.log(userData);

  let total_pages = book?.pages;
  const keys = userData ? Object.keys(userData) : [];
  let dates = [];
  let pages = [];
  keys.forEach((key) => dates.push(key));
  dates = dates.sort();
  dates.forEach((date) => {
    pages.push(userData[date]);
  });

  const data = {
    labels: dates,
    datasets: [
      {
        labels: "Pages Read",
        data: pages,
        backgroundColor: "teal",
        borderColor: "teal",
        pointBorderColor: "teal",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
