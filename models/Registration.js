const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({

eventId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Event"
},

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

qrCode:String,

registeredAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Registration",registrationSchema);