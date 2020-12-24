import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { RiseLoader } from "react-spinners";
import { css } from "@emotion/core";

import axios from "axios";

import "../Styles/showDetails.css";

const ShowDevices = (props) => {
  const [totalsam, settotalsam] = useState(0);
  const [totalapp, settotalapp] = useState(0);
  const [totalone, settotalone] = useState(0);

  const [samLabel, setsamLabel] = useState("");
  const [appLabel, setappLabel] = useState("");
  const [OneLabel, setOneLabel] = useState("");

  const [HaveToLoad, setHaveToLoad] = useState(false);

  let newDATASamsung = [];
  let newDATAApple = [];
  let newDATAOnePlus = [];

  const URL = "https://i-dream-task.herokuapp.com/fetchdata";

  const override = css`
    display: block;
    margin: 400px auto;
    border-color: red;
  `;

  useEffect(() => {
    setHaveToLoad(true);
    axios
      .get(URL)
      .then((res) => {
        // console.log("Fetcheddata ====>>>>> ", res.data[2].deviceDetails);
        setHaveToLoad(false);

        const length = res.data.length;

        let query;

        // console.log("newDATA.length ", newDATA.length);
        for (let i = 0; i < length; i++) {
          query = res.data[i].deviceDetails;

          if (query && query.vendor && query.deviceDetails !== "none") {
            if (query.vendor === "Apple") {
              newDATAApple.push(res.data[i]);
            }
            if (query.vendor === "Samsung") {
              newDATASamsung.push(res.data[i]);
            }
            if (query.vendor === "OnePlus") {
              newDATAOnePlus.push(res.data[i]);
            }
          }
        }

        // console.log("newDATAApple \n ", newDATAApple);
        // console.log("newDATASamsung \n ", newDATASamsung);
        // console.log("newDATAOnePlus \n ", newDATAOnePlus);

        setsamLabel(newDATASamsung[0].deviceDetails.vendor);
        setappLabel(newDATAApple[0].deviceDetails.vendor);
        setOneLabel(newDATAOnePlus[0].deviceDetails.vendor);

        settotalsam(newDATASamsung.length);
        settotalapp(newDATAApple.length);
        settotalone(newDATAOnePlus.length);
      })
      .catch((err) => {
        console.error("Error occured! ", err);
        alert(
          "Can't FETCH Right Now , Because of Network Error , Please Connect Soon ... "
        );
      });
  }, []);

  return (
    <div className="showTheDetailsParent">
      {HaveToLoad === true && (
        <div className="Spinner-loder">
          <RiseLoader
            css={override}
            color="rgb(255, 174, 174)"
            size={50}
            loading
          />
        </div>
      )}
      <h3>
        Here You Are Seeing Device Details , Which Are In Activity On Our
        platform :
      </h3>
      <div>
        <Pie
          data={{
            labels: [samLabel, appLabel, OneLabel],
            datasets: [
              {
                label: "Population",
                data: [totalsam, totalapp, totalone],
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
              text: `All Devices`,
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

export default ShowDevices;
