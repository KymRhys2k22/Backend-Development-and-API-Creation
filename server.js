import express from "express";
import connectDB from "./config/db.js";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

//Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("API Running");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
