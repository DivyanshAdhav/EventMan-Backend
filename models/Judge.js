const mongoose = require("mongoose");

const judgeSchema = new mongoose.Schema({

name:String,

email:{
type:String,
unique:true
},

password:String,

organization:String,

expertise:String

});

module.exports = mongoose.model("Judge",judgeSchema);