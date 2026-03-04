const Judge = require("../models/Judge");
const bcrypt = require("bcryptjs");

exports.addJudge = async (req,res)=>{

try{

const {name,email,password,organization,expertise} = req.body;

if(!name || !email || !password){
return res.status(400).json({msg:"Missing fields"});
}

const existing = await Judge.findOne({email});

if(existing){
return res.status(400).json({msg:"Judge already exists"});
}

const hashedPassword = await bcrypt.hash(password,10);

const judge = new Judge({
name,
email,
password:hashedPassword,
organization,
expertise
});

await judge.save();

res.json({
message:"Judge Added Successfully",
judge
});

}

catch(err){

console.log(err);
res.status(500).json(err);

}

};



exports.loginJudge = async (req,res)=>{

try{

const {email,password} = req.body;

const judge = await Judge.findOne({email});

if(!judge){
return res.status(400).json({msg:"Judge not found"});
}

const valid = await bcrypt.compare(password,judge.password);

if(!valid){
return res.status(400).json({msg:"Wrong password"});
}

res.json({
message:"Login successful",
judge
});

}

catch(err){

console.log(err);
res.status(500).json(err);

}

};



exports.getJudges = async (req,res)=>{

try{

const judges = await Judge.find();

res.json(judges);

}

catch(err){

res.status(500).json(err);

}

};