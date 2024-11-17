const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const gundamSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    catergory:{
        type:String,
        enum:["HG","NG","PG","SD","RG"],
        required:true
    },
    price:{
        type:Number,
        required:true
    }

}) 