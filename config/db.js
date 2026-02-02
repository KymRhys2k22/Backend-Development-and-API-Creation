import mongoose from "mongoose";
import config from "config";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(`the error message: ${err.message}`);
    //Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
