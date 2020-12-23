const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const connectDB = require("./Models/Db");
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log("Requested Url Is : ", req.url);
  next();
});

const find = (name, query, hint = {}, sort = {}, limit = 1000) => {
  return new Promise((resolve, reject) => {
    mongoose.connection.db.collection(name, (err, res) => {
      if (err) reject(err);
      resolve(
        res
          .find({ $query: query, $hint: { ...hint } })
          .sort(sort)
          .limit(limit)
          .toArray()
      );
    });
  });
};

app.get("/", (req, res) => {
  res.json({
    message: "Go To Another Route To See Productive Result,",
    Next_Route: "https://i-dream-task.herokuapp.com/fetchdata",
  });
});

app.get("/fetchdata", async function (req, res) {
  try {
    const data = await find("events", {});
    // console.log("data", data);
    res.send(data);
  } catch (err) {
    // console.log("There is some error : ", err);
    return res.send(
      "There Is Some Error Fetching The Data ! Please Try Again."
    );
  }
});

app.use((req, res, next) => {
  res.json({
    status_code: 404,
    error: `YOU did Something WRONG ! Sorry, Try Again !`,
    Next_Route1: "https://i-dream-task.herokuapp.com/",
    Next_Route2: "https://i-dream-task.herokuapp.com/fetchdata",
  });
  next();
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
