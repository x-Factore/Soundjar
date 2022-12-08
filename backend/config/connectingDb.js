const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connectedDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectedDb;
