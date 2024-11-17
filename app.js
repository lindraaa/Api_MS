const express = require("express");
const app = express()
const PORT  = 9000;
const mongoose = require("mongoose");

//routes
const gundam_routes = require("./routes/gundam_routes")

mongoose.connect("mongodb://localhost:27017/MSuit_Api")
    .then(()=>{
        console.log("Database Connected")
    })
    .catch(err=>{
        console.log("Connection Failed", err)
    })



app.use("/",gundam_routes)


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})