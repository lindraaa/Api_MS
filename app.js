const express = require("express");
const app = express()
const PORT  = 9000;



app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})