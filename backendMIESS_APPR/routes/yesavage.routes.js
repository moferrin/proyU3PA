const express = require("express");
const router = express.Router();

const yesavage = require("../controllers/yesavage.controller");

router.get("/:id", yesavage.obtenerTestByIdEnc);

router.post("/", yesavage.createYesavage);

router.get('/uni/:id', yesavage.getYesavage);
 
module.exports = router;