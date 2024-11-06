const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = require("./App");
const connectDatabase = require("./config/Database");


dotenv.config({ path: "./config/config.env" });

connectDatabase();


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Backend API!");
});

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});