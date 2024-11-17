const express = require("express");
const { index } = require("../controllers/gundam_controllers");
const router = express.Router();


router.get("/",index)

module.exports = router;