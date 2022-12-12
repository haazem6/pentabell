const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRouter = require("./src/routes/user-routes");
const todoRouter = require("./src/routes/todos-routes");


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


// routes
app.use("/api/user", userRouter);
app.use("/api/todos", todoRouter);


//Database Connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) =>
    console.log(err.message || "Could Not Establish Connection ")
  );

app.listen(PORT, () =>
  console.log(`Backend Server Is Running On Server ${PORT}`)
);