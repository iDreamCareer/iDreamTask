import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiseLoader } from "react-spinners";
import { css } from "@emotion/core";

function JourneyScores(props) {
  const URL = "https://i-dream-task.herokuapp.com/fetchdata";

  const [JourneyScores, setJourneyScores] = useState([]);
  const [HaveToLoad, setHaveToLoad] = useState(false);

  let journeyData = [];

  let grandTotal = 0;

  const override = css`
    display: block;
    margin: 400px auto;
    border-color: red;
  `;

  useEffect(() => {
    setHaveToLoad(true);
    axios.get(URL).then((res) => {
      // console.log("Fetcheddata ====>>>>> ", res.data);
      setHaveToLoad(false);
      const length = res.data.length;

      let query;

      console.log("query ", query);
      for (let i = 0; i < length; i++) {
        query = res.data[i];

        if (query && query.journey_score !== 0) {
          journeyData.push(res.data[i]);
        }
      }
      console.log("journeyData ", journeyData);
      setJourneyScores(journeyData);
    });
  }, []);

  return (
    <div>
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
      <h1>Total journey details will be here : </h1>
      <div className="journeyscoreparent">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Data</th>

              <th scope="col">Total Count</th>
            </tr>
          </thead>
          <tbody>
            {JourneyScores.map((data, i) => {
              // console.log("data ", data.journey_score);
              grandTotal += data.journey_score;

              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{data.updatedAt}</td>

                  <td>{data.journey_score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{
            width: "100%",
            fontSize: "26px",
            height: "40px",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            Grand Total :
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            {grandTotal}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyScores;
