const express = require("express");
const router = express.Router();

const adulto = require("../controllers/adulto.controller");

router.get("/", adulto.getAdultos);

router.get("/getCount/:id", adulto.getAdultosCount);

router.post("/", adulto.createAdulto);

router.get("/get/:id", adulto.getAdulto);

router.get("/:id", adulto.getAdultoByTec);

router.put("/edit/:id", adulto.editAdulto);

router.delete("delete/:id", adulto.deleteAdulto);

module.exports = router;