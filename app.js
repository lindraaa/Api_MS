const express = require("express");
const app = express()
const PORT  = 9000;
const gundam_routes = require("./routes/gundam_routes")

app.use("/",gundam_routes)


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})