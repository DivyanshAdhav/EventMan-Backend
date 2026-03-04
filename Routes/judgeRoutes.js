const router = require("express").Router();
const judgeController = require("../controllers/judgeController");

router.post("/",judgeController.addJudge);

router.post("/login",judgeController.loginJudge);

router.get("/",judgeController.getJudges);

module.exports = router;