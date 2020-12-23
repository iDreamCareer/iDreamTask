import React, { useEffect, useState } from "react";

// import "../Styles/home.css";

import axios from "axios";

const ShowTheDevices = () => {
  // const [Data, setData] = useState([]);

  // const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  // const URL = "https://i-dream-task.herokuapp.com/";

  // useEffect(() => {
  //   axios
  //     .get(PROXY_URL + URL)
  //     .then((res) => {
  //       // console.log("Fetcheddata ====>>>>> ", res.data.data.purchased_services);

  //       const data = res.data.data.purchased_services;
  //       const length = data.length;

  //       for (let i = 0; i < length; i++) {
  //         const addLength =
  //           data[i].purchased_office_template.purchased_office_services.length;
  //         // console.log("data.name ", data[i].name);
  //         for (let j = 0; j < addLength; j++) {
  //           if (
  //             data[i].purchased_office_template.purchased_office_services[j]
  //               .service_selected !== null ||
  //             undefined
  //           ) {
  //             // console.log("Purchased Services : ===== > \n");
  //             // console.log(
  //             //   i + " " + j + " ",
  //             //   data[i].purchased_office_template.purchased_office_services[j]
  //             // );

  //             data[i].purchased_office_template.purchased_office_services[
  //               j
  //             ].mainServiceName = data[i].name;

  //             newPDATA.push(
  //               data[i].purchased_office_template.purchased_office_services[j]
  //             );

  //             total.current =
  //               total.current +
  //               Number(
  //                 data[i].purchased_office_template.purchased_office_services[j]
  //                   .price
  //               );
  //           }

  //           if (
  //             data[i].purchased_office_template.purchased_office_services[j]
  //               .service_selected === null ||
  //             undefined
  //           ) {
  //             // console.log("Additional Services : ===== > \n");

  //             // console.log(
  //             //   i + " " + j + " ",
  //             //   data[i].purchased_office_template.purchased_office_services[j]
  //             // );

  //             data[i].purchased_office_template.purchased_office_services[
  //               j
  //             ].mainServiceName = data[i].name;

  //             newADATA.push(
  //               data[i].purchased_office_template.purchased_office_services[j]
  //             );

  //             // setaData(
  //             //   data[i].purchased_office_template.purchased_office_services[j]
  //             // );
  //           }
  //         }
  //       }
  //       // console.log("length ", length);
  //       // console.log(
  //       //   "length 1 ",
  //       //   data[i].purchased_office_template.purchased_office_services.length
  //       // );

  //       setpData(newPDATA);
  //       setaData(newADATA);
  //     })
  //     .catch((err) => {
  //       console.error("Error occured! ", err);
  //       alert(
  //         "Can't FETCH Right Now , Because of Network Error , Please Connect Soon ... "
  //       );
  //     });

  //   // console.log("Purchased Services : ===== >  \n", pData, "\n");
  //   // console.log("Additional Services : ===== > \n", aData, "\n");
  // }, []);

  return <div className=""></div>;
};

export default ShowTheDevices;
