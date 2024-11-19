const express = require("express");
const { indexController, newGController,delGController } = require("../controllers/gundam_controllers");
const router = express.Router();


router.get("/", indexController)
      .post("/newGundam", newGController)
      .delete("/:id", delGController)
module.exports = router;