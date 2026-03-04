const Evaluation = require("../models/Evaluation");

exports.submitEvaluation = async(req,res)=>{

try{

const {
participantName,
projectTitle,
innovation,
technical,
presentation,
uiux,
total
} = req.body;

const evaluation = new Evaluation({
participantName,
projectTitle,
innovation,
technical,
presentation,
uiux,
total
});

await evaluation.save();

res.json({
message:"Evaluation submitted",
evaluation
});

}

catch(err){

console.log(err);
res.status(500).json(err);

}

};



exports.getLeaderboard = async(req,res)=>{

try{

const leaderboard = await Evaluation.aggregate([

{
$group:{
_id:"$participantName",
project:{ $first:"$projectTitle" },
totalScore:{ $sum:"$total" }
}
},

{ $sort:{ totalScore:-1 } }

]);

res.json(leaderboard);

}

catch(err){

console.log(err);
res.status(500).json(err);

}

};