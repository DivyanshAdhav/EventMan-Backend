const router = require("express").Router();
const evaluationController = require("../controllers/evaluationController");

router.post("/",evaluationController.submitEvaluation);

router.get("/leaderboard",evaluationController.getLeaderboard);

module.exports = router;