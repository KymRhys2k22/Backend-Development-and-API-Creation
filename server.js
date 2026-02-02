import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/api/auth.js";
import userRouter from "./routes/api/users.js";
import profileRouter from "./routes/api/profile.js";
import postRouter from "./routes/api/posts.js";

const app = express();

//Connect to database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

//Define routes
app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
