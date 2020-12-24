import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import { RiseLoader } from "react-spinners";
import { css } from "@emotion/core";
import axios from "axios";

import "../Styles/NoOfClicks.css";

function NoOfClicks(props) {
  const URL = "https://i-dream-task.herokuapp.com/fetchdata";
  const [sscrolldepth, setsscrolldepth] = useState(0);
  const [slogin, setslogin] = useState(0);
  const [sclick, setsclick] = useState(0);
  const [sINPUT, setsINPUT] = useState(0);
  const [stimespent, setstimespent] = useState(0);
  const [spage, setspage] = useState(0);

  const [iHaveToLoad, setiHaveToLoad] = useState(false);

  let scrolldepth = [];
  let login = [];
  let click = [];
  let iINPUT = [];
  let timespent = [];
  let page = [];

  const override = css`
    display: block;
    margin: 400px auto;
    border-color: red;
  `;

  useEffect(() => {
    setiHaveToLoad(true);
    axios.get(URL).then((res) => {
      // console.log("Fetcheddata ====>>>>> ", res.data);

      setiHaveToLoad(false);
      const length = res.data.length;

      let query;

      // console.log("newDATA.length ", newDATA.length);
      for (let i = 0; i < length; i++) {
        query = res.data[i];

        if (query) {
          if (query.event_type === "scroll-depth") {
            scrolldepth.push(query);
          }
          if (query.event_type === "login") {
            login.push(query);
          }
          if (query.event_type === "click") {
            click.push(query);
          }
          if (query.event_type === "INPUT") {
            iINPUT.push(query);
          }
          if (query.event_type === "time-spent") {
            timespent.push(query);
          }
          if (query.event_type === "page") {
            page.push(query);
          }
        }
      }
      // console.log("timespent", timespent);

      setsscrolldepth(scrolldepth.length);
      setslogin(login.length);
      setsclick(click.length);
      setsINPUT(iINPUT.length);
      setstimespent(timespent.length);
      setspage(page.length);
    });
  }, []);

  return (
    <div>
      {iHaveToLoad === true && (
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
        Here We Are Gonna Show , number of click, slide, time-spent, login
        activities :
      </h3>

      <div className="barparent">
        <Bar
          data={{
            labels: [
              "scrolldepth",
              "login",
              "click",
              "iINPUT",
              "timespent",
              "page",
            ],
            datasets: [
              {
                label: "event_type",

                data: [sscrolldepth, slogin, sclick, sINPUT, stimespent, spage],
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
              text: `All Type Of event_type On This Site`,
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
