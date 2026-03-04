const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({

participantName: String,

projectTitle: String,

innovation: Number,

technical: Number,

presentation: Number,

uiux: Number,

total: Number,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Evaluation",evaluationSchema);