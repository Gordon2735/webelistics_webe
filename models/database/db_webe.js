// Importing the mongoose module
import dotenv from "dotenv";
import mongoose from "mongoose";

// setup .env file

// Setting up the mongoose default connection
const mongoDB = "monogdb://127.0.0.1/models/database/db_webe.js";

const DATABASE_URL = process.env.DATABASE_URL || mongoDB;
dotenv.config = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(DATABASE_URL, config);

// Make the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"))
  .on("open", () => {
    console.info("Connected to MongoDB");
  })
  .on("close", () => {
    console.info("Disconnected from MongoDB");
  })
  .on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default mongoose;
