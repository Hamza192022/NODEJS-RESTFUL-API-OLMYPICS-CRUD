const mongoose = require("mongoose");
// const validator = require("validator");


const olympicsScheme = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    phone :{
        type : Number,
        required:true
    },
    age : {
        type : Number,
        required: true
    },
    color : {
        type : [String]
    },
    car :{
        carname :{
            type : String
        },
        carprice :{
            type :Number
        },
        carcolor :{
            type : String
        }
    }

})

// <============create collection============>
const Olympics = new mongoose.model("Olympic",olympicsScheme);

module.exports=Olympics