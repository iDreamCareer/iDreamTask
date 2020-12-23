import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

import "../Styles/showDetails.css";

import axios from "axios";

const Home = (props) => {
  const [Data, setData] = useState([]);
  //   const [chartData, setchartData] = useState({});

  const URL = "https://i-dream-task.herokuapp.com/fetchdata";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // console.log("Fetcheddata ====>>>>> ", res.data[2].deviceDetails);

        const length = res.data.length;

        let newDATA = [];

        for (let i = 0; i < length; i++) {
          if (res.data[i].deviceDetails && res.data[i].deviceDetails.vendor) {
            console.log("result by query ==>> ", res.data[i].deviceDetails);

            // newDATA.push(res.data[i].deviceDetails);
          }
        }

        setData(newDATA);
      })
      .catch((err) => {
        console.error("Error occured! ", err);
        alert(
          "Can't FETCH Right Now , Because of Network Error , Please Connect Soon ... "
        );
      });

    // console.log("Purchased Services : ===== >  \n", pData, "\n");
    // console.log("Additional Services : ===== > \n", aData, "\n");
  }, []);

  return (
    <div className="showTheDetailsParent">
      {/* {console.log("Data", Data)} */}
      {/* {console.log("chartData", chartData)} */}
      <h3>
        Here You Are Seeing Device Details , Which Are In Activity On Our
        platform :
      </h3>
      <div>
        <Pie
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
          height={480}
          width={600}
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
};

export default Home;
