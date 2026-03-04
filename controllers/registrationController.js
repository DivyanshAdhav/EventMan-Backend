const Registration = require("../models/Registration");
const QRCode = require("qrcode");

exports.registerEvent = async(req,res)=>{

try{

const {eventId,userId} = req.body;

const ticketData = `${eventId}-${userId}-${Date.now()}`;

const qrCode = await QRCode.toDataURL(ticketData);

const registration = new Registration({
eventId,
userId,
qrCode
});

await registration.save();

res.json({
message:"Registration Successful",
ticketQR:qrCode
});

}

catch(err){

console.log(err);
res.status(500).json(err);

}

};



exports.getParticipants = async(req,res)=>{

try{

const participants = await Registration.find()
.populate("eventId")
.populate("userId");

res.json(participants);

}

catch(err){

console.log(err);
res.status(500).json(err);

}

};