const express = require("express");
const router = express.Router();

const tecnico = require("../controllers/tecnico.controller");

router.get("/", tecnico.getTecnicos);

router.post("/", tecnico.createTecnico);

router.post("/signIn", tecnico.getLogin);

router.get("/:id", tecnico.getTecnicoBySup);

//router.get("/getCount", tecnico.getTecnicosCount);

router.put("/:id", tecnico.editTecnico);

router.delete("/:id", tecnico.deleteTecnico);

module.exports = router;