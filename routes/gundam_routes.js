const express = require("express");
const { indexController,newGController } = require("../controllers/gundam_controllers");
const router = express.Router();


router.get("/",indexController)
router.post("/newGundam",newGController)

module.exports = router;