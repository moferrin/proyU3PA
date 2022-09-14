const Adulto = require("../models/adulto.model");

const adultoCtrl = {};

adultoCtrl.getAdultos = async (req, res, next) => {
  const adultos = await Adulto.find();
  res.json(adultos);
};

adultoCtrl.getAdultosCount = async (req, res, next) => {
  const { id } = req.params;
  const adultos = await Adulto.find({"tec_id":id}).count();
  res.json(adultos);
};

adultoCtrl.createAdulto = async (req, res, next) => {
  const adulto = new Adulto({
    am_ci: req.body.cedula,
    tec_id: req.body.tec_id,
    am_nombres: req.body.name,
    am_apellidos: req.body.lastname,
    am_genero: req.body.genero,
    am_fecha_nac: req.body.date,
    am_etnia: req.body.etnia,
    am_dir: req.body.direccion,
    am_origen: req.body.origen,
    am_fecha_reg: req.body.fechaReg,
  });
  await adulto.save();
  res.json({ status: "adulto_c" });
};

adultoCtrl.getAdulto = async (req, res, next) => {
  const { id } = req.params;
  const adulto = await Adulto.findById(id);
  res.json(adulto);
};

adultoCtrl.getAdultoByTec = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const adulto = await Adulto.find({"tec_id":id});
  res.json(adulto);
};

adultoCtrl.editAdulto = async (req, res, next) => {
  const { id } = req.params;
  await Adulto.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "adulto Updated" });
};

adultoCtrl.deleteAdulto = async (req, res, next) => {
  await Adulto.findByIdAndRemove(req.params.am_ci);
  res.json({ status: "adulto Deleted" });
};

module.exports = adultoCtrl;

