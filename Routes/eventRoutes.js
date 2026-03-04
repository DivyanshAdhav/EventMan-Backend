const router = require("express").Router();
const eventController = require("../controllers/eventController");

router.get("/",eventController.getEvents);
router.post("/",eventController.createEvent);

module.exports = router;