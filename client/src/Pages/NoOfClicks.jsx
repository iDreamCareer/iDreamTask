import React from "react";
import { Bar } from "react-chartjs-2";

import "../Styles/NoOfClicks.css";

function NoOfClicks(props) {
  return (
    <div>
      <h3>
        Here We Are Gonna Show , number of click, slide, time-spent, login
        activitie :
      </h3>

      <div className="barparent">
        <Bar
          data={{
            labels: [
              "Boston",
              "Worcester",
              "Springfield",
              "Lowell",
              "Cambridge",
              "New Bedford",
            ],
            datasets: [
              {
                label: "Population",

                data: [617594, 181045, 153060, 106519, 105162, 95072],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
                ],
              },
            ],
          }}
          height={494}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: `"Largest Cities In " + "City"`,
              fontSize: 25,
            },

            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    </div>
  );
}

export default NoOfClicks;
