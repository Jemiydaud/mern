const express = require("express");
const app = express();
require("dotenv").config();
const studentsRouter = require ("./students")

const port = process.env.PORT || 3002;
const mongoose = require ("mongoose");
const url = process.env.URL;




app.use("/api/students",studentsRouter)

// app.get("/", (req, res) => {
//     console.log("hello");
//       })



app.listen(port, () => {
    console.log(`Server is listening :${port}`);
}) 