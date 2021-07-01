const express = require("express");
const router = express.Router();
const StudentSchema = require("./models/StudentsModel");

router.post("/", (req, res) => {
    StudentSchema.create({
       name: "Jemi", 
       first_name: "Daud", 
       email: "jemi@yahoo.com" }),
   function (newStudent) {
     res.send(newStudent);
   }});

   

router.get("/", (req,res) => {
    res.send("Here is a list of students")
})

module.exports = router

