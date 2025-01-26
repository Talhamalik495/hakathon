import express from "express";
import "dotenv/config";
import cors from "cors";
let app = express();
import mongoose from "mongoose";
import tokenGenrateRouter from "./routers/tokenGenrate.js";
app.use(express.json());
app.use(cors("*"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting", error);
  });
app.get("/", (req, res) => {
  res.send("get request chal gy");
});
app.use("/tokenGenrate", tokenGenrateRouter);
app.listen(process.env.PORT, () => {
  console.log("Server is runing on port" + process.env.PORT);
});
