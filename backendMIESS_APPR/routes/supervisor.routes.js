const express = require("express");
const router = express.Router();

const supervisor = require("../controllers/supervisor.controller.js");

router.get("/", supervisor.getSupervisors);

router.post("/", supervisor.createSupervisor);

router.post("/signIn", supervisor.getLogin);

router.get("/:id", supervisor.getSupervisor);

//router.get("/getCount", supervisor.getSupervisorsCount);

router.put("/:id", supervisor.editSupervisor);

router.delete("/:id", supervisor.deleteSupervisor);

module.exports = router;