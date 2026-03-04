const router = require("express").Router();
const registrationController = require("../controllers/registrationController");

router.post("/",registrationController.registerEvent);

router.get("/participants",registrationController.getParticipants);

module.exports = router;