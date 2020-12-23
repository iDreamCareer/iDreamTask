import React, { useEffect, useState } from "react";

// import "../Styles/home.css";

import axios from "axios";

const ShowTheDevices = () => {
  const [Data, setData] = useState([]);

  const URL = "https://i-dream-task.herokuapp.com/fetchdata";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log("Fetcheddata ====>>>>> ", res.data.data);

        const length = res.length;

        let newDATA = [];

        for (let i = 0; i < length; i++) {
          const addLength =
            res[i].purchased_office_template.purchased_office_services.length;
          // console.log("res.name ", res[i].name);
          for (let j = 0; j < addLength; j++) {
            if (
              res[i].purchased_office_template.purchased_office_services[j]
                .service_selected !== null ||
              undefined
            ) {
              // console.log("Purchased Services : ===== > \n");
              // console.log(
              //   i + " " + j + " ",
              //   res[i].purchased_office_template.purchased_office_services[j]
              // );

              res[i].purchased_office_template.purchased_office_services[
                j
              ].mainServiceName = res[i].name;

              newDATA.push(
                res[i].purchased_office_template.purchased_office_services[j]
              );
            }
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

  return <div className="">hlo</div>;
};

export default ShowTheDevices;
