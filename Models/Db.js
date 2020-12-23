// MONGO DB CONNECTION

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to database with mongoURI from environment variable

    await mongoose.connect(
      "mongodb+srv://staginguser:oSuWNPFUeT7hY2ND@idc2-staging.nixxe.mongodb.net/events?retryWrites=true&w=majority",

      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      (err) => {
        if (!err) return console.log("MongoDB Connection Succeeded.");
        console.log("Error in DB connection  : ", err.message);
      }
    );
  } catch (err) {
    console.log("Error as \n", err.message);
    // Exit process with failure if error
    process.exit(1);
  }
};

module.exports = connectDB;
